import React, { useState } from 'react'
import styled from 'styled-components'

const NumberSlector = ({selectedNumber, setSelectedNumber, pain , setPain}) => {

    const numberArray = [1, 2, 3, 4, 5, 6]
    const numberHnadler = (value) =>{
        setSelectedNumber(value);
        setPain("");
    }
    console.log(selectedNumber);
    
  return (
    <NumberSelectorContainer>
        <p style={{color:"red"}}>{pain}</p>
      <div className="flex">
          {numberArray.map((value, i) =>(
            <Box isSelected={value === selectedNumber}
            onClick={()=> numberHnadler(value)}
            
            key={i}>{value}</Box>
        ))}
      </div>
      <p>Select Number</p>
    


    </NumberSelectorContainer>
  )
}

export default NumberSlector;



const NumberSelectorContainer  = styled.div`
display: flex;
flex-direction: column;
align-items: end;
  .flex{
    display: flex;
    gap: 24px;
  }
  p{
    font-size: 24px;
    font-weight: 700;
  }
`

const Box = styled.div`
    width: 72px;
    height: 72px;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    font-weight: 700;
    background-color:${({isSelected}) => (isSelected ? "Black" : "white" )};
    color:${({isSelected}) => (isSelected ? "white" : "black" )};

`