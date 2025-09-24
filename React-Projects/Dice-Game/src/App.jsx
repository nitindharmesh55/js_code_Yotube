import React, { useState } from 'react'
import styled from "styled-components";
import StartGame from './Components/StartGame';
import GamePlay from './Components/GamePlay';

const App = () => {
  const [isGameStarted, setisGameStart] = useState(false)

  const toggleGame = () =>{
    setisGameStart(prev => !prev);
  }
  return (
    <div>
     
     {
      isGameStarted ? <GamePlay /> : <StartGame toggle={toggleGame} />
     }
  


    </div>
  )
}

export default App