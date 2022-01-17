import React from "react";
import TodoList  from "./TodoList";
import NavBar from "./NavBar";

class App extends React.Component{

    render(){
      return  (
      <div className='container pt-5'>
        <h1 className='mb-3'>Liste des taches</h1>
        <TodoList/>
        <NavBar/>
      </div>
      );
    }
  }

  export default App ;