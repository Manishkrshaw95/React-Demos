import React from 'react'

const HandlingList = () => {
    const numbers = [1,2,3]
  return (
    <div>
        {
        numbers.map(number => (
            <ul >
                <li key={number}>{number}</li>
            </ul>
        )) 
        }
    </div>
  )
}

export default HandlingList