import { useState, useEffect } from 'react';
import { Booking } from '../types';
import axios from 'axios';

const useFetchCreditReport = () => {
  const [result, setResults] = useState<Booking[]>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get('/api/bookings')
      .then(response => response.data)
      .then(response => {
        setResults(response);
        setLoading(false);
      })
      .catch(error => setError(error.message));
  }, []);

  return {
    result,
    loading,
    error,
  };
};

export default useFetchCreditReport;
