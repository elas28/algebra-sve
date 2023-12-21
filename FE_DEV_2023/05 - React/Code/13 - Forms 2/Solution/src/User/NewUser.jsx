import { useState } from 'react';

export default function NewUser({ onUserSubmit }) {
  const [userData, setUserData] = useState({
    name: '',
    years: '',
  });

  const onNameChange = e => {
    const name = e.target.value;
    setUserData({ ...userData, name });
  };

  const onYearsChange = e => {
    const years = e.target.value;
    setUserData({ ...userData, years: parseInt(years, 10) });
  };

  const handleUserSubmit = e => {
    e.preventDefault();
    const { name, years } = userData;

    if (name && years) {
      onUserSubmit({ name, years });
      setUserData({ name: '', years: '' });
    } else {
      alert('Podatci nisu ispravno unjeti!')
    }
  };

  const { name, years } = userData;

  return (
    <form onSubmit={handleUserSubmit} style={{ background: 'aliceblue', padding: '20px', marginTop: '30px' }}>
      Novi korisnik:
      <input type='text' name='Ime' placeholder='Ime' onChange={onNameChange} value={name} />
      <input type='text' name='Godine' placeholder='Godine' onChange={onYearsChange} value={years} />
      <button type='submit'>Prihvati</button>
    </form>
  );
};
