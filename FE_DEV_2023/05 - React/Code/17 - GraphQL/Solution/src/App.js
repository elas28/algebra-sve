import './App.css';

import { useState, useEffect } from 'react'

export default function App() {

  const [data, setData] = useState({})

  useEffect(() => {
    fetch('https://rickandmortyapi.com/graphql', {
      method: 'POST',

      headers: {
        'Content-Type': 'application/json'
      },

      body: JSON.stringify({
        query: `{
        characters(filter: { name: "rick" }) {
          results {
            name
            status
            gender
            origin {
              name
            }
            location {
              name
            }
            image
          }
        }
      }`
      })
    })
      .then(response => response.json())
      .then(data => setData(data.data.characters))
  }, [])

  return (
    <div>
      <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg"></img>
      <table>
        <tr>
          <th>Name</th>
          <th>Status</th>
          <th>Gender</th>
          <th>Origin</th>
          <th>Location</th>
          <th>Image</th>
        </tr>
        {data.results?.map(result =>
          <tr>
            <td>{result.name}</td>
            <td>{result.status}</td>
            <td>{result.gender}</td>
            <td>{result.origin.name}</td>
            <td>{result.location.name}</td>
            <td><img src={result.image} alt={result.name} className='character' /></td>
          </tr>
        )}
      </table>
    </div>
  );
}