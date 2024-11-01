import React from 'react'

const JSXRules = () => {
    const date = new Date()
  return (
    <div className="jsx-rules" >
        <h1>JSX Rules -- {date.getDate()} / { date.getMonth()} /{date.getFullYear()}</h1>
        <p>JSX must return a <b>single parent element!</b></p>
        <p>JSX Elements must ne <b>properly closed.</b></p>
        <p>JSX attributes are written using camelCase <b>(e.g. className instead of class)</b></p>
    </div>
  );
};

export default JSXRules