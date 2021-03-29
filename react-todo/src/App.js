import React, {useState} from "react";
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './css/App.css';



function App() {

  const [todos , setTodos] = useState ([]);

  function todoAdd(todo){


    setTodos ([todo,...todos]);

  }

 
function toggleCheckbox(id){

  setTodos(
    todos.map(todo => {


      if (todo.id === id){

        return{

          ...todo,
          completed: !todo.completed
        };
      }
      return todo;
    })

  );

}

    function deleteTodo(id){

      setTodos(todos.filter(todo => todo.id !== id));



    }

    function updateTodo({todoId,newValue}){

      setTodos(
        todos.map(todo => {
    
    
          if (todo.id !== todoId){
              return todo;
            }

            return{
    
              ...todo,
              task : newValue
            };
          }
          
        )
    
      );
    
    }





 
    

  return (
    <div className="App">
      <header className="App-header">
       <p>REACT TO DO LIST</p>
       <TodoForm todoAdd={todoAdd}/>
       <TodoList todos={todos} toggleCheckbox={toggleCheckbox} deleteTodo={deleteTodo} updateTodo={updateTodo}/>
      </header>
    </div>
  );
}

export default App;
