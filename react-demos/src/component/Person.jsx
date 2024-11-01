import React from 'react'

const Person = ({name, age}) => {
  return (
    <div>
        <h1>Person name :{name}</h1>
        <h2>Age: {age}</h2>
    </div>
  )
}

export default Person