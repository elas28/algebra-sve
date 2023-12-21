import { useState, useEffect } from 'react'
import './App.css'

export default function App() {

  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/${import.meta.env.VITE_API_USERS}/1`)
      .then(response => response.json())
      .then(data => setData(data))
  }, [])

  return (
    <>
      <h1>Hello, {data.name}!</h1>
      <p>{data.phone}</p>
    </>
  )
}
