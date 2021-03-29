import React from "react" ; 
import Todo from './Todo';
import '../css/TodoList.css';
// listeyi oluştur 
function TodoList ({todos , toggleCheckbox,deleteTodo,updateTodo}) {

    return(

        <ul>

            {todos.map ( todo => (


                 <Todo key={todo.id} todo={todo} toggleCheckbox={toggleCheckbox} deleteTodo={deleteTodo} updateTodo={updateTodo}/>

            ))}

        </ul>

    );

}

export default TodoList;