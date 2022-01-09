import React, {useState, useEffect} from 'react'
//import { FancyButton } from './styles';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TodoList from './components/Tasklist/TodoList'
import styled from "styled-components";
import TodoForm from './components/Tasklist/form'
// import  {AddTask} from './components/Tasklist/addTask';
import BetterForm from './components/Tasklist/BettterForm';
import Weather from './pages/weather';
import TodoPage from './todoPage';


const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  background: #add8e6;
  height: 100vh;
  overflow: hidden;
`


const MiddleContainer = styled.div`
  width: 600px;
  margin: 20px auto;
  background: white;
  align: center;
  height: 80%;
  padding: 10px;
  border-radius: 10px;
  align: bottom;
`
const ListContainer = styled.div`
  background: white;
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 10px;
  margin-bottom: 0px;
  height: 68%;
  padding: 10px;
  border-radius: 10px;
  overflow: scroll;
  "::-webkit-scrollbar-track": 
{
  display:none;
}
  &::-webkit-scrollbar {
    display:none;
  }
`

const FormContainer = styled.div`
  background: white;
  align: bottom;
  padding: 20px;
  border-radius: 10px;
  
`

const TopContainer = styled.div`
background: white;
align: top;
padding: 10px;
border-radius: 10px;

`

// import COMPONENT from 'FILEPATH'


const App = () => {
const [inputText, setInputText] = useState("")
const [todos, setTodos] = useState([]);
const [filtered, setFiltered] = useState("DEFFFAULT")

useEffect(() => {
  getLocalTodos();
},[]);

useEffect(() => {
  saveLocalTodos();  
}, [todos]);

const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
}

const getLocalTodos = () =>
{
  if(localStorage.getItem('todos') === null){
    localStorage.setItem('todos', JSON.stringify([]));
  }
  else{
    let todosFromLocal = JSON.parse(localStorage.getItem('todos'));
    setTodos(todosFromLocal);
  }
}

return (
  <div>
    <Container>
        <Router>
            <Navbar/>
            <Switch>
              <Route path='/weather' exact component={Weather}/>
            </Switch>
            <Switch>
              <Route path='/' exact component={TodoPage}/>
            </Switch>
        </Router>
        
    </Container>
  </div>
);
}



export default App
