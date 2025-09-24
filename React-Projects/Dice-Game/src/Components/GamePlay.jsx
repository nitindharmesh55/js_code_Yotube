import React from 'react'
import TotalScore from './TotalScore'
import NumberSlector from './NumberSlector'
import styled from 'styled-components'
import RollerDice from './RollerDice'
import { useState } from 'react'
import { Button, Outline } from '../styled/button'
import Rule from './Rule'
const GamePlay = () => {
    const [selectedNumber, setSelectedNumber] = useState();
    const [currentDice, setCurrentDice]  = useState(1);
    const [score, setScore] = useState(0);
    const [pain, setPain] = useState(" ");
    const [hide, sethide] = useState(true)
      const RandomGen = (min, max) =>{
        return Math.floor(Math.random() * (max - min) + min);

    }
    const RollDice = () =>{
            if(!selectedNumber){

                setPain("Hey Buddy Pick-up the number Bitch");
                return;
            };
            
        const RandomNumber =  RandomGen(1,7);
        setCurrentDice((prev) => RandomNumber);

    

        if(selectedNumber === RandomNumber)
        {
            setScore(prev => prev + RandomNumber);
        }else
        {
            setScore(prev => prev - 2);
        }

        setSelectedNumber(undefined)
    }

    const resetScore = ()=>{
        setScore(0);
    }

    const ruleTime = () =>{
        sethide(prev => !prev);
    }

    return (
        <MainContainer>
            <div className='topSection'>
                <TotalScore  score={score}/>
                <NumberSlector  setPain={setPain} pain={pain} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} />

            </div>
            <RollerDice currentDice={currentDice} RollDice={RollDice}/>

            <div className="btns">
                <Outline onClick={resetScore}>Reset</Outline>
                <Button
                onClick={ruleTime}
                >{hide?"show":"hide"} Rules</Button>

            </div>
            {hide ? null : <Rule />}

        </MainContainer>
    )
}

export default GamePlay;
const MainContainer = styled.div`
    .topSection{
      display: flex;
      justify-content: space-between;
      align-items: end;
    }
    .btns{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap:24px;
        margin-top: 40px;
    }
`