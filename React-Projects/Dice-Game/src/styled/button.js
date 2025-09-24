import styled from "styled-components"

export const Button = styled.button`
  padding: 10px 18px;
  background: #000;
  color: white;
  border-radius: 5px;
  font-size: 16px;
  min-width: 220px;
  border: 1px solid transparent;

  &:hover{
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.3s background ease-in;
  }
`

export const Outline = styled(Button)`

background-color: white;
color: black;
border: 1px solid black;

&:hover{
    background-color: black;
    color: white;
    border: 1px solid transparent;
}
`