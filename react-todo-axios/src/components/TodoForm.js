import React, { useState } from "react";
import '../css/TodoForm.css';
import { MdAddCircleOutline } from "@react-icons/all-files/md/MdAddCircleOutline";


function TodoForm({todoAdd}) {
  

  const [todo, setTodo] = useState({
    id: "",
    title: "",
    completed: false,
  });


  const ID = function () {

    return '_' + Math.random().toString(36).substr(2, 9);
};
 

  function handleInputChange(e) {
    setTodo({ ...todo, title: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (todo.title.trim()) {
      todoAdd({ ...todo, id: ID() });

      setTodo({ ...todo, title:"" });
    }
  }
  
  

  return (
    <form onSubmit={handleSubmit}>
      <input className="input" placeholder="" name="title" type="text" value={todo.title} onChange={handleInputChange} />
        
        {

          todo.title.length > 2 ?

         (<button className="addbutton" type="submit" ><MdAddCircleOutline /></button> )

         : 

         (null)

        }
        
      
    </form>
    
  );
}

export default TodoForm;
