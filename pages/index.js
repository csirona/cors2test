import React, { useState, useEffect } from 'react';

export default function Home() {
  const [date, setDate] = useState('');

  useEffect(() => {
    fetch('https://corsnextjs.vercel.app/api/date')
      .then(response => response.json())
      .then(data => {
        setDate(data.date);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Current Date:</h1>
      <p>{date}</p>
    </div>
  );
}
