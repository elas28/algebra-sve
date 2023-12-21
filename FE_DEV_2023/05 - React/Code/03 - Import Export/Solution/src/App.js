import './App.css';
import Person from './Person'; // Default export
import { sum } from './Util'; // Named export
import { num1, num2 } from './Util'; // Named export

import Osoba from './Person'; // Default export with custom name

import { sum as zbroj } from './Util'; // Named export with AS

import * as ALL from './Util'; // Named export with *

function App() {
  return (
    <div className="App">
      <p>{Person.name}</p>
      <p>Sum of 5 + 3 is {sum(5, 3)}</p>
      <p>Sum of 5 + 25 is {sum(num1, num2)}</p>
      <p>The person's name is {Osoba.name}</p>
      <p>The sum of 5 + 25 is {zbroj(5, 25)}</p>
      <p>The sum of 5 + 25 is {ALL.sum(ALL.num1, ALL.num2)}</p>
    </div>
  );
}

export default App;
