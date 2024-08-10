import React, { useState } from "react";

import Form from "../Form/Form";
import { TodoList } from "../TodoList/TodoList";
import Head from "../Head/Head";
import { Footer } from "../Footer/Footer";

const Todo = () => {
  const [save, setSave] = useState([]);
  const completedTODO = save.filter((todo) => todo.done).length;
  const totalTODO = save.length;

  return (
    <div className="todo">
      <Head />
      <Form save={save} setSave={setSave} />
      <TodoList save={save} setSave={setSave} />
      <Footer completedTODO={completedTODO} totalTODO={totalTODO} />
    </div>
  );
};

export default Todo;
