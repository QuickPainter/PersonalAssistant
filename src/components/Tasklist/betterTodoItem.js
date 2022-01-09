import React from 'react';
import TodoList from './TodoList';
import ExampleComponent from '../../ExampleComponent';
import {Button} from 'react-bootstrap'
import { BestButton, BestTaskDiv, BestLi, BestDelBtn, BestCoSpan, BestFakeCheckContainer } from './todoItemStyle';

const BetterTodoItem = ({text, filtered, todo, todos, setTodos}) => {


    const deleteHandler = () =>
    {
        //console.log(todo)
        // will create a new array with all elements tha pass the condition, so all elements that were not clicked on.
        setTodos(todos.filter((el) => el.id !== todo.id));
    }
    const completeHandler = () => 
    {
        setTodos(todos.map(item => {
            console.log(item.completed)
            if(item.id === todo.id)
            {
                console.log("COMPLETED!")

                //keeps all properties the same except for the completed property, which it sets to the opposite of current status
                return {
                    ...item, completed: !item.completed
                }
            }
            console.log(item.completed)
            return item;
        })
        );
    }
    console.log(todos)
    console.log(todo)
    console.log('black')
    console.log(text)
    if(todo != undefined)
    {
    if(text.includes(filtered))
    {
        return(
            <BestTaskDiv className='todo'>
                <BestLi className='todo-item'>{text}</BestLi>
                <BestCoSpan>
                <span onClick={completeHandler}>
                    <input type="checkbox" />
                </span>
                <BestDelBtn onClick={deleteHandler}>
                    Delete
                </BestDelBtn>
                </BestCoSpan>
                </BestTaskDiv>
        );
    }
    else{
        return (
        <div>
        </div>
        )
    }
    
    }
    else {
        return (
        <div >
            
            </div>
        )
    }
};

export default BetterTodoItem;