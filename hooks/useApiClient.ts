import { useState, useEffect } from 'react';
import { Booking } from '../types';
import axios from 'axios';

const useApiClient = (url: any) => {
  const [result, setResults] = useState<Booking[]>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    debugger;
    setLoading(true);
    axios
      .get(url)
      .then(response => response.data)
      .then(response => {
        setResults(response);
        setLoading(false);
      })
      .catch(error => setError(error));
  }, []);

  return {
    result,
    loading,
    error,
  };
};

export default useApiClient;
