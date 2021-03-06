//bir yapılacak işler nesnesi oluşturur ve eylemlerini yönetir
import React, { useState } from "react";
import "../css/Todo.css";
import { MdClear } from "@react-icons/all-files/md/MdClear/";
import { MdCreate } from "@react-icons/all-files/md/MdCreate/";
import { MdDone  } from "@react-icons/all-files/md/MdDone/";

function Todo({ todo, toggleCheckbox, deleteTodo, updateTodo , }) {
  function handleCheckboxClick() {
    toggleCheckbox(todo.id);
  }
  function handleDeleteClick() {
    deleteTodo(todo.id);
  }

  function seetEditable() {
    setEditable(true);
  }

  
  const [editable, setEditable] = useState(false); //editleyebilmek için oluşturuldu
  const [title, setTitle] = useState(todo.title); //edit input değeri için oluşturuldu



  return (
    
    <div style={{ display: "flex" }}>
        
      
      <li
        style={{
          textDecoration: todo.completed ? "line-through" : null,
        }}
      >
        <input
          className="checkbox"
          type="checkbox"
          onClick={handleCheckboxClick}
        />
        {editable ? (
          <input
            className="todoedit"
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        ) : (
          <p>{todo.title}</p>
        )}

        <div className="islem">
        {editable ? (
          <button className="update" onClick={()=>{

            updateTodo({

                todoId: todo.id,
                newValue:title,

            });

            setTitle('');
            setEditable(false);
          }}  

           

          >
            {" "}
            <MdDone />
          </button>
        ) : (
          <button className="edit" onClick={seetEditable}>
            <MdCreate />
          </button>
        )}

        <button className="delete" onClick={handleDeleteClick}>
          <MdClear />
        </button>
        </div>
      </li>
    </div>
  );
}

export default Todo;
