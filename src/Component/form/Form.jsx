import React, { useState } from "react";
import "./Form.css";

const Form = ({ save, setSave }) => {
  const [todo, setTodo] = useState({ name: "", done: false });

  const handleSubmite = (e) => {
    e.preventDefault();
    setSave([...save, todo]);
    setTodo({ name: "", done: false });
  };
  return (
    <form className="form" onSubmit={handleSubmite}>
      <div className="inputContain">
        <input
          className="input"
          type="text"
          onChange={(e) => setTodo({ name: e.target.value, done: false })}
          value={todo.name}
          placeholder=" enter todo item"
        />
        <button type="submite">Add</button>
      </div>
    </form>
  );
};

export default Form;
