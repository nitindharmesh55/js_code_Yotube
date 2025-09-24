import React from 'react'
import styled from 'styled-components'

const TotalScore = ({score}) => {
  return (
    <TotalContainer>
        <h1>{score}</h1>
        <p>Total Score</p>
    </TotalContainer>
  )
}

export default TotalScore

const TotalContainer = styled.div`
text-align: center;
max-width: 200px;
    h1{
        font-size: 100px;
        line-height: 50px;
    }
    p{
        font-size: 24px;
        font-weight: 500;
    }
`