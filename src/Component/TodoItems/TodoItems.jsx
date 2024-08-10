import React from "react";
import "./TodoItems.css";
import Todo from "../Todo/Todo";

const TodoItems = ({ items, save, setSave }) => {
  const handleDelete = (items) => {
    console.log("delete items", items);
    setSave(save.filter((todo) => todo !== items));
  };
  const handleClick = (name) => {
    const Lord = save.map((todo) =>
      todo.name === name ? { ...todo, done: !todo.done } : todo
    );
    setSave(Lord);
  };

  return (
    <div className="item">
      <div className="itemName">
        <span
          className={items.done ? "complet" : ""}
          onClick={() => handleClick(items.name)}
        >
          {items.name}
        </span>
        <span>
          <button className="button" onClick={() => handleDelete(items)}>
            x
          </button>
        </span>
      </div>
      <hr className="line" />
    </div>
  );
};

export default TodoItems;
