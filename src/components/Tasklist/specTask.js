import React from "react"
import PropTypes from "prop-types"
import styled from 'styled-components'

const FancyList = styled.li`
    list-style: none;
    overflow: hidden;
    width: 100%;
    margin-bottom: 10px;
`

const StyledLabel = styled.label`
    float: left;
    cursor: pointer;
`
const StyledButton = styled.button`
    float: right;
    background: black;
    color: #FFF;
    border-radius: 3px;
    border: 2px solid black;
    padding: 3px 10px;
    outline: none;
    cursor: pointer;
`

const TodoItem = props => {
    const { id, title } = props
    return (
        <FancyList>
            <p>some text</p>
            <StyledLabel htmlFor={id}>
                <input type="checkbox" id={id} /> {title}
            </StyledLabel>
            <StyledButton type="button">Delete</StyledButton>
        </FancyList>
    )
}
TodoItem.propTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
}
export default TodoItem