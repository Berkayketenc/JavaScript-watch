import React, {useState , useEffect} from "react";
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './css/App.css';
import axios from 'axios';





function App() {

  const [todos , setTodos] = useState ([]);

  function todoAdd(todo){
   
    axios.post('https://jsonplaceholder.typicode.com/todos', 

    setTodos ([todo,...todos])

     );

  }

  
  useEffect(() => {
    
    
    axios.get('https://jsonplaceholder.typicode.com/todos?').then((res) => {
        setTodos(res.data.slice(1, 2));
        console.log(todos);
    })
  
 /* eslint-disable react-hooks/exhaustive-deps */ //boş array yüzünden hooks uyarı verdiği için uyarıyı kapattım
} ,[]); 




 
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
      axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res =>
      
      setTodos(todos.filter(todo => todo.id !== id))
       
      );
    }

    function updateTodo({todoId,newValue,id}){
      axios.patch(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res =>
      setTodos(
        todos.map(todo => {
    
    
          if (todo.id !== todoId){
              return todo;
            }

            return{
    
              ...todo,
              title : newValue
            };
          }
          
        )
    
      )
      );
    
    }

    function allDelete(){

      
      const newTodos = todos.filter(todo=>{
        

        return todo.completed === false

        


      })
      
      setTodos(newTodos)
      
     
    }





 
    

  return (
    <div className="App">
      <header className="App-header">
       <p>REACT TO DO LIST</p>
       <TodoForm todoAdd={todoAdd}/>
       <TodoList todos={todos} toggleCheckbox={toggleCheckbox} deleteTodo={deleteTodo} updateTodo={updateTodo} allDelete={allDelete}/>
      </header>
    </div>
  );
}

export default App;
