import React, { useState } from "react";
import '../css/TodoForm.css';
import { MdAddCircleOutline } from "@react-icons/all-files/md/MdAddCircleOutline";


function TodoForm({todoAdd}) {
  

  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false,
  });


  var ID = function () {

    return '_' + Math.random().toString(36).substr(2, 9);
};
 

  function handleInputChange(e) {
    setTodo({ ...todo, task: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (todo.task.trim()) {
      todoAdd({ ...todo, id: ID() });

      setTodo({ ...todo, task:"" });
    }
  }
  

  return (
    <form onSubmit={handleSubmit}>
      <input className="input" placeholder="" name="task" type="text" value={todo.task} onChange={handleInputChange} />

      <button className="addbutton" type="submit"><MdAddCircleOutline /></button>
    </form>
  );
}

export default TodoForm;
