// Solution of Task 2
import { useState } from 'react';
import Bart from '../Assets/Bart.svg';
import Lisa from '../Assets/Lisa.svg';

export default function Events() {
  const [character, setCharacter] = useState('');
  const [visible, setVisible] = useState(false)

  function onChangeValue(e) {
    setCharacter(e.target.value);
  }

  function handleSubmit() {
    if (character !== '') {
      setVisible(true)
    } else {
      alert('You must pick!')
    }
  }

  function setImage() {
    if (character === 'Lisa') {
      return <img src={Lisa} alt='Lisa' />
    } else {
      return <img src={Bart} alt='Bart' />
    }
  }

  return (
    <>
      <div onChange={onChangeValue}>
        <h1>Who do you like more?</h1>

        <input type='radio' id='Lisa' name='character' value='Lisa' />
        <label htmlFor='Lisa'>Lisa</label>

        <input type='radio' id='Bart' name='character' value='Bart' />
        <label htmlFor='Bart'>Bart</label>
      </div>
      <hr />
      <button type='submit' onClick={handleSubmit}>
        Submit
      </button>
      <hr />
      {visible !== false ? setImage() : null}
      {visible !== false ? `You have selected ${character}` : null}
    </>
  );
}
