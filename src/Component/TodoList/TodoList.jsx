import React from "react";
import TodoItems from "../TodoItems/TodoItems";
import "./TodoList.css";

export const TodoList = ({ save, setSave }) => {
  const sortTodo = save.slice().sort((a, b) => Number(a.done) - Number(b.done));
  return (
    <div className="list">
      {sortTodo.map((items) => (
        <TodoItems
          items={items}
          key={items.name}
          setSave={setSave}
          save={save}
        />
      ))}
    </div>
  );
};
