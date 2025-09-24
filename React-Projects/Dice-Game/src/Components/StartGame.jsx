import React from 'react'
import styled from "styled-components"
import DiceImg from "./images/dice.png";
import { Button } from '../styled/button';

const StartGame = ({toggle}) => {
  return (
    <Container>
      <div className='imgeC'>
              <img src={DiceImg} alt="" />
      </div>
    

      <div className='Content'>
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Game</Button>
      </div>
    </Container>
  )
}

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  .imgeC{
    img{
      width: 600px;
      height: 600px;
    }
  }

  .Content{
    h1{
      font-size: 96px;
      font-weight: bold;
    }
  }

`
