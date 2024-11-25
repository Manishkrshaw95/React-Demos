import React, { useState } from 'react'
 
import './todoStyle.css'

function generateID(){
    return Math.floor(Math.random() * 17563829);
}

function Todo() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("")

    const addtodo = () => {
        if (input.trim() !== '') { 
            
            setTodos(todos => [
              ...todos, 
              {
                text: input,
                id: generateID(),
              },
            ]);
       setInput("");
        }
    };
    const removeTodo = (id) => {
        setTodos((todos) => todos.filter((t) => t.id != id));
    }

    const handleKeyPress = (event) => {
        if(event.key === 'Enter'){
            addtodo();
        }
    }


  return (
    <div className="main-div">
        <div className="container">
            <input
            id='todo-input-box'
            text="text"
            value={input}
            placeholder='Add your new todos here'
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
            />
            <button onClick={addtodo}>Add Todo</button>

            <ol className="todo-lists">
                {todos.map(({text, id}) => (
                    <li key={id} className="todo">
                        {id}
                        <span>{text}</span>
                        <button className="close" onClick={ () => removeTodo(id)}> X </button>
                    </li>
                ))}
            </ol>
        </div>
    </div>
  );
}

export default Todo;