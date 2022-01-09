import styled from 'styled-components'
import {Button} from 'react-bootstrap'

export const BestButton = styled(Button)`
    color: blue;
    variant: primary;
`

export const BestAddIcon = styled.i`
    color: black;
    font-size: 30px;
    margin: 5px;

    &:hover{
        cursor: pointer;
    }
`
export const BestBarDiv = styled.div`
    background-color: #3f76bf;
    border-radius: 5px;
    padding: 5px;
    overflow: auto;
`    

export const BestInput = styled.input`
    border: 0; padding: 7px 0; 
    border-bottom: 1px solid white;
    background-color: #3f76bf;
    color: black;
    margin-bottom: 10px;
    font-size: 15px;
    width: 80%;
    margin-left: 10px;
    &:focus{
        outline: none;
    }

`

export const Besth3 = styled.h3`
float: left;
margin-left: 20px;
`

export const BestInputForm = styled.input`
    border: 0; padding: 7px 0; 
    border-bottom: 1px solid white;
    background-color: #3f76bf;
    color: black;
    float: right;
    font-size: 15px;
    position: relative;
    left: -20px;
    top: 10px;
    width: 80%;
    &:focus{
        outline: none;
    }

`


export const BestTaskDiv = styled.div`
    background: #fed8b1; 
    border-radius: 4px;
    overflow: auto;
    padding: 10px;
    margin-top:10px;
    margin-bottom:10px;
    align: row;

`
export const BestLi = styled.li `
    list-style-type: none;
    width: 80%;
    float: left;
`

export const BestCoSpan = styled.span`
    float: right;
    margin-left: 5px;
`

export const BestDelBtn = styled.button`
    margin-left: 5px;
    border-radius: 5px;
    background-color: black;
    color: white;

    &:hover{
        color: white;
        box-shadow: gray 1px 1px;
        cursor: pointer;
    }
`