import React, { useState } from 'react'

import './App.css'

import Header from './components/Header'
import InputForm from './components/InputForm'
import DogBreedList from './components/DogBreedList'

function App() {

  const DUMMY_BREEDS = [
    'Golden Retriever',
    'Leonberger',
    'Keeshond',
    'Wolfhound',
    'Old English Sheepdog',
    'Norfolk Terrier'
  ]

  const [dogBreedList, setDogBreedList] = useState(DUMMY_BREEDS)

  const inputBreed = (newBreed) => setDogBreedList([...dogBreedList, newBreed])
  console.log(dogBreedList)

  return (
    <div>
      <Header />
      <InputForm breeds={inputBreed} />
      <DogBreedList list={dogBreedList} />
    </div>
  )
}

export default App
