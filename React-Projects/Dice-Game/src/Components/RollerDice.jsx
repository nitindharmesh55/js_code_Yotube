import React, { useState } from 'react'
import styled from 'styled-components'
import dice_1 from "./images/dice_1.png";
import dice_2 from "./images/dice_2.png";
import dice_3 from "./images/dice_3.png";
import dice_4 from "./images/dice_4.png";
import dice_5 from "./images/dice_5.png";
import dice_6 from "./images/dice_6.png";




const RollerDice = ({RollDice, currentDice}) => {
    const diceImages = {
  1: dice_1,
  2: dice_2,
  3: dice_3,
  4: dice_4,
  5: dice_5,
  6: dice_6,
};

   
  
  return (
    <DiceController>
        <div className='diceImg'>
            <img  onClick={RollDice} src={diceImages[currentDice]} alt="Dice" />
        </div>
        <p>Click on Dice to Roll</p>
    </DiceController>
  )
}

export default RollerDice;

const DiceController = styled.div`
display: flex;
margin-top: 48px;
flex-direction: column;
align-items: center;
justify-content: center;
.diceImg img{
    width: 200px;
    height: 200px;
}
  p{
    font-size: 24px;
    font-weight: 700;
  }  
`