import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Error() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 5000); 

    return () => clearTimeout(timer); 
  }, [navigate]);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1 style={{ color: 'red' }}>Unauthorized</h1>
      <p style={{ fontStyle: 'italic' }}>You are not authorized to access this page.</p>
    </div>
  );
};



