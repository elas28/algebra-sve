import React, { useState } from 'react';

export default function App() {
  const [value, setValue] = useState('');

  const handleChange = event => {
    setValue(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    alert(`Poslano je ime ${value}`);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Ime:
        <input type='text' value={value} onChange={handleChange} />
      </label>
      <input type='submit' value='Potvrdi' />
    </form>
  );
};