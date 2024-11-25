import React, { useState } from 'react'
import "./style.css"

const ToggleColor = () => {
    //define 3 state for backgroundcolor, button VideoColorSpace, text VideoColorSpace
    //then appply the css properly

    const [bgcolor, setBgcolor] = useState("green");
    const [buttonclr, setButtonclr] = useState("blue")
    const [textclr, setTextclr] = useState("green")

    function handleclick(){
        setBgcolor(bgcolor=== "green" ? "1b1b1b" : "green")
        setButtonclr(buttonclr === "blue" ? "#ffa31a" : "blue");
        setTextclr(textclr === "green" ? "#1b1b1b" : "green");
    }



  return (
    <section style={{bgcolor, color: textclr}}>
        <button onClick={handleclick}>Toggle Color</button>
        <section className="content">
        <h1>
          Welcome To A <br /> Real World..
        </h1>
      </section>
    </section>
  )
}

export default ToggleColor