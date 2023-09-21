import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./index.css"

function SecondsPage() {
    const [seconds, setSeconds] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const countdown = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds === 1) {
          clearInterval(countdown);
          navigate("/exit");
        }
        return prevSeconds - 1;
      });
    }, 1000);

    return () => {
      clearInterval(countdown);
    };
  }, [navigate]);

  return (
    <div className='seconds-container'>
      <h1 className='seconds'>{seconds}</h1>
    </div>
  );
}

export default SecondsPage;
