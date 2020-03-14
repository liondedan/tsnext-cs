import React, { useState } from 'react';

const login = () => {
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();

  const checkStatus = async () => {
    const query = await fetch('/api/auth/me', {
      method: 'GET',
    });
    //@ts-ignore
    if (query.err) {
    }

    const body = await query.json();
    console.log(body);
  };

  const login = async (e: any) => {
    e.preventDefault();
    const formData = { ...name, ...email, ...password };
    const query = await fetch('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    //
    //@ts-ignore
    if (query.err) {
      //@ts-ignore
      console.log(query.err);
    }

    const body = await query.json();
    console.log(body);
  };

  const submit = (e: any) => {
    e.preventDefault();
    const formData = { ...name, ...password, ...email };
    fetch('/api/auth/register', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => {
        if (res.status === 200) {
          console.log('success');
        } else {
          //@ts-ignore
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch(err => {
        console.error(err);
        console.log(err);
      });
  };

  const handleName = (event: any) => {
    const { value } = event.target;
    setName({ name: value });
  };

  const handlePassword = (event: any) => {
    const { value } = event.target;
    setPassword({ password: value });
  };

  const handleEmail = (event: any) => {
    const { value } = event.target;
    setEmail({ email: value });
  };

  return (
    <>
      <button onClick={checkStatus}>Check</button>
      <button onClick={login}>login</button>
      <form onSubmit={submit}>
        <input name="email" type="text" onChange={handleEmail} />
        <input name="name" type="text" onChange={handleName} />
        <input name="password" type="password" onChange={handlePassword} />
        <button />
      </form>
    </>
  );
};

export default login;
