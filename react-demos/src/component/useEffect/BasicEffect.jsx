import React, { useEffect } from 'react'

const BasicEffect = () => {
    useEffect(() => {
        console.log("Use effect has been called.")
    } , []);

  return (
    <div>
        <p>Baisc effect has been loaded.</p>
    </div>
  )
}

export default BasicEffect