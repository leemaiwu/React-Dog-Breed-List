import React from 'react'

import './DogBreedList.css'

const DogBreedList = (props) => {

    let displayBreed = props.list.map((breeds, index) => {
        return <li key={index} >{breeds}</li>
    })

    return (
        <div className='dog-breed-list'>
            <ul className='dog-breed' >{displayBreed}</ul>
        </div>
    )
}

export default DogBreedList
