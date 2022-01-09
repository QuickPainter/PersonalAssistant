import React, {useState} from 'react'
import { FancyInput, FancyButton } from './taskElem'
import { BestBarDiv, BestInputForm, Besth3 } from './todoItemStyle'

const FormInput = ({ label, value, setValue }) => (
    <div>
        <BestInputForm value={value}
            onChange={e => setValue(e.target.value)}/>
    </div>
)

const FormButton = ({text,action}) => (
    <FancyButton onClick={action}>
        {text}
    </FancyButton>
)



const TodoForm = ({filtered, setFiltered}) =>
{

    const [TaskText, setTaskText] = useState('')

    const filterHandler = (text) => {
        console.log(text["TaskText"])
        console.log("fi")
        setFiltered(text["TaskText"])
        console.log(filtered)
    }
    

    return(
        <BestBarDiv>
        <Besth3>Filter:</Besth3>
        <form onChange={filterHandler({TaskText})}>
            <FormInput focus='true' type='text' placeholder="Search for a task" value={TaskText} setValue={setTaskText}  />
        </form> 
        </BestBarDiv>
    )
}

export default TodoForm