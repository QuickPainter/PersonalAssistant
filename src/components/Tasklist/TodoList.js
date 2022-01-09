import React from 'react'
import TodoItem from './specTask'
import styled from "styled-components"
import { AllTodos} from './addTask'
import BetterTodoItem from './betterTodoItem'

 const fancyUL = styled.ul`
  padding:0px;
  background-color: blue;
`

const TodoList = ({todos, filtered, setTodos})=> {
  console.log(todos)
  
return(
    <fancyUL className="todoList">
        <BetterTodoItem/>
        {todos.map(todo => (
          <BetterTodoItem 
           todos={todos} 
           filtered = {filtered}
           setTodos={setTodos}
           key={todo.id} 
           todo = {todo}
           text={todo.text}/>
        ))}
   </fancyUL>
)
}
export default TodoList