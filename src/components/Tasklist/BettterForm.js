import React from 'react'
import {nanoid} from 'nanoid'
import {BestAddIcon, BestBarDiv, BestCoSpan, BestInput} from './todoItemStyle';


const BetterForm = ({setInputText, todos, setTodos, inputText}) => {

const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
};

const submitTodoHandler = (e) =>
{
    e.preventDefault();
    setTodos([  
    ...todos, {text: inputText, completed:false, id: nanoid(), filtered: true}]);
    console.log(todos)
    setInputText("");
}

 const handleKeyPress = (event) => {
  if(event.key === 'Enter'){
    event.preventDefault();
    console.log("ENTER PUSHED!")
    submitTodoHandler(event);
  }
}
    return (
    <BestBarDiv>
    <form>
      <BestInput onKeyPress={handleKeyPress} onvalue={inputText} onChange={inputTextHandler} type="text" class="todo-input" />
      <BestCoSpan onClick={submitTodoHandler} class="todo-button" type="submit">
        <BestAddIcon className="fas fa-plus-circle"/>
      </BestCoSpan>
    </form>
    </BestBarDiv>
    );
}

export default BetterForm;