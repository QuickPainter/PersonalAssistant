import styled from 'styled-components'

export const fancyUL = styled.ul`
  padding:10px;
  background-color: blue;
`

export const FancyInput = styled.input`
    width: 90%;
    font-size: 13px;
    padding-top: 7px;
    padding-bottom: 7px;
    border-radius: 5px;
    float: left;
`

export const FancyButton = styled.button`
  background: white;
  border: 1px solid black;
  border-radius: 4px;
  margin: 5px;

  cursor: pointer;

  &:hover {
    box-shadow: 2px 2px;
  }
`
export const GoodForm = styled.form`
  align: flex;
`