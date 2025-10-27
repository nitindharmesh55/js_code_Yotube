import React from 'react'
import styled from 'styled-components'

const HeroText = () => {
  return (
    <Herotext>
      <h2>100% plant based.</h2>
      <h2 className='plate'>Petroleum-free. Guilt-free.</h2>
      <p>
        Born from nature, returning to nature. <br />Every bottle of Apara saves the planet 
        from plastic waste - one sip at a time. <br />  <span>It’s not just water. It’s a choice for tomorrow.</span>
      </p>
    </Herotext>
  )
}

export default HeroText

const Herotext = styled.section`
  background: #111915;
  display: flex;
  flex-direction: column;
  height: 368px;
  width: 100%;
  position: relative;
  /* overflow: hidden; helps manage stacking */

  .plate{
    margin-top: -30px;
    background: linear-gradient(40deg,rgba(57, 173, 3,1), #F8962C);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; 
    background-clip: text;
    color: transparent; 
  }
  
  h2 {
    font-size: 56px;
    text-align: center;
    line-height: 100%;
    font-weight: 600;
    color: white;
    position: relative; /* creates stacking context above ::before */
    z-index: 2;
    margin-bottom: 0;
    padding-top: 72px;
  }

  p {
    text-align: center;
    color: #ccc;
    max-width: 638px;
    font-weight: 400;
    font-size: 18px;
    height: 78px;
    line-height:26px;
    margin: 20px auto 0;
    /* line-height: 1.4; */
    z-index: 2;
    position: relative;

    span{
        color:orange;
    }
  }

  &::before {
    content: "";
    background: #111915;
    height: 263px;
    width: 100%;
    position: absolute;
    top:-60px ;/* put it below the text */
    z-index: 1;
    
    filter:blur(100px)/* behind h2 and p */
  }
`
