import React,{Fragment} from 'react';
import './App.css';
//component
import Inputtodo from './components/InputTodo'
import ListTodos from './components/ListTodos'

function App() {
  return (
    <Fragment>
      <div className="container">
       <Inputtodo/>
       <ListTodos/>
      </div>
    </Fragment>
  
  );
}

export default App;
