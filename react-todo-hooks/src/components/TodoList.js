
import React from "react" ; 
import Todo from './Todo';
import '../css/TodoList.css';
// listeyi oluştur 
function TodoList ({todos , toggleCheckbox,deleteTodo,updateTodo,allDelete}) {

    return(

        <ul>

            {todos.map ( todo => (


                 <Todo key={todo.id} todo={todo} toggleCheckbox={toggleCheckbox} deleteTodo={deleteTodo} updateTodo={updateTodo} allDelete={allDelete}/>
                 

            ))}

             
              {    todos.length <= 0 ?
                
                (null)

                :
                
                ( <button className="deleteallbutton" onClick={allDelete}>Select Delete </button>)

                }


            
        </ul>

    );

}

export default TodoList;