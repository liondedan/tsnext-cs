import { useState } from 'react';

const useSignUpForm = () => {
  const [value, setValue] = useState({});
  const onChange = (e: any) => {
    console.log(value);
    e.persist();
    setValue(inputs => ({ ...inputs, [e.target.name]: e.target.value }));
  };
  return {
    value,
    setValue,
    onChange,
  };
};

export default useSignUpForm;
