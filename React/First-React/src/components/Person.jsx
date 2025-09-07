import React from 'react'

const Person = ({name, age}) => {
  return (
    <div>

        <h1>Hey there it's {name}</h1>
        <p>i'm {age} years Old</p>
    </div>
  )
}

export default Person;