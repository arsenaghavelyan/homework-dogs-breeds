import { useState } from 'react'
import './App.css'
import Breeds from './Breeds'
import Dogs from './Dogs'

function App() {
  const [forCexatesak, setForCexatesak] = useState([])

  function forBreeds(yntrvacBreeds) {
    setForCexatesak(yntrvacBreeds)
  }
  return (
    <div>
      <Breeds yntrvacBreeds={forBreeds} />
      <Dogs dogBreeds={forCexatesak} />
    </div>
  )
}

export default App
