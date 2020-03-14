import { useEffect, useState } from 'react';
import Router from 'next/router';

const useAuth = () => {
  const [authorized, setAuthorized] = useState(false);
  const checkStatus = async () => {
    const query = await fetch('/api/auth/me', {
      method: 'GET',
    });

    //@ts-ignore
    if (query.err) {
      //@ts-ignore
      console.log(query.err);
      Router.push('/');
    }

    const body = await query.json();

    if (body.auth == false) {
      Router.push('/');
    }

    if (query.status == 200) {
      setAuthorized(true);
    }
  };

  useEffect(() => {
    checkStatus();
  }, []);

  return {
    authorized,
  };
};

export default useAuth;
