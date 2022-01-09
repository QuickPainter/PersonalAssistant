
import React, {useState, useEffect} from 'react'
//import { FancyButton } from './styles';
import TodoList from './components/Tasklist/TodoList'
import styled from "styled-components";
import TodoForm from './components/Tasklist/form'
// import  {AddTask} from './components/Tasklist/addTask';
import BetterForm from './components/Tasklist/BettterForm';



const MiddleContainer = styled.div`
  width: 600px;
  margin: 20px auto;
  background: white;
  align: center;
  border: 1px solid gray;
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
  height: 50vh;
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
  float: bottom;
  padding: 20px;
  border-radius: 10px;
  
`

const TopContainer = styled.div`
background: white;
align: top;
padding: 10px;
border-radius: 10px;

`

const TodoPage = () => {

    
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
<MiddleContainer>
            <TopContainer>
                <TodoForm filtered={filtered} setFiltered={setFiltered} todos={todos} setTodos={setTodos} />
            </TopContainer>
            <ListContainer>
              <TodoList filtered={filtered} setFiltered={setFiltered} todos={todos} setTodos={setTodos} />
            </ListContainer>
            <FormContainer>
                <BetterForm inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText}/>
            </FormContainer>
      </MiddleContainer>  
      </div>
)

}

export default TodoPage;


