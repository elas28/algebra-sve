import './App.css';
import { useState } from 'react'

export default function App() {
  const [animals, setAnimals] = useState(['Cat 🐈', 'Cow 🐄', 'Mouse 🐁', 'Horse 🐎'])

  const removeLastAnimal = () => {
    // Create a copy of the array
    const updatedAnimals = [...animals];
    // Remove the last element from the array
    updatedAnimals.pop();
    // Update the state with the new array
    setAnimals(updatedAnimals);
  };

  const removeSpecificAnimal = (animalToRemove) => {
    const updatedAnimals = animals.filter(animal => animal !== animalToRemove);
    setAnimals(updatedAnimals);
  };

  const addAnimal = () => {
    let newAnimal = prompt('What animal do you want to add?');

    if (newAnimal != null && newAnimal != "") {
      setAnimals([...animals, newAnimal])
    }
  }

  return (
    <>
      {animals.length == 0 ? <h1>There are no animals :/</h1> : <ul>
        {animals.map(animal => (
          <li key={crypto.randomUUID()}>{animal}</li>
        ))}
      </ul>}
      <button onClick={addAnimal}>Add new animal</button>
      <button onClick={removeLastAnimal}>Remove last animal</button>
      <button onClick={() => removeSpecificAnimal(prompt('Which animal do you want to remove?'))}>Remove specific animal</button>
    </>
  );
}