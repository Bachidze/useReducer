import  { useState } from "react";

export default function Display() {
    const [input, setInput] = useState("");
    const [todo, setTodo] = useState(['']);

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    const handleTodos = () => {
        setTodo([...todo,input])
        setInput("")
    }

    return (
        <>
           <input type="text" onChange={handleChange} />
           {todo.map(el => (
            <h1>{el}</h1>
           ))}
           <button onClick={handleTodos}>click me</button>
        </>
    );
}
