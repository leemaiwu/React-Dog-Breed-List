import React, { useState } from 'react'

import './InputForm.css'

const InputForm = (props) => {

    const [userInput, setUserInput] = useState('')

    const submitHandler = (event) => {
        event.preventDefault()
        props.breeds(userInput)
        setUserInput('')
    }

    const changeHandler = (event) => {
        setUserInput(event.target.value)
    }

    return (
        <div>
            <form className='form-card' onSubmit={submitHandler} >
                <input type='text' placeholder='Add a Dog Breed' className='inputfield' value={userInput} onChange={changeHandler} />
                <button className='formButton' >Add</button>
            </form>
        </div>
    )
}

export default InputForm
