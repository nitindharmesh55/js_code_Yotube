import React from 'react'
import styled from 'styled-components'

const Rule = () => {
    return (
        <RuleContainer>
            <h2>How to play dice game</h2>
            <div className="text">
                <p>Select any number</p>
            <p>Click on dice image</p>
            <p>after click on  dice  if selected number is equal to dice number you will get same point as dice</p>
            <p>if you get wrong guess then  2 point will be dedcuted </p>

            </div>
           
        </RuleContainer>
    )
}

export default Rule

const RuleContainer = styled.div`
max-width: 800px;
margin: 20px auto;
/* border: 1px solid black; */
background-color: #fbf1f1;
padding:20px;

h1{
    font-size: 34px
}
.text{
    margin-top: 24px;
    font-size: 16px;
}
    
`