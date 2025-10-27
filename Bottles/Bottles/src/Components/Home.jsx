import React from 'react'
import styled from 'styled-components'
import Hero from "../Assets/Home.png";
import Bottle from "../Assets/Bottle-1.png";
import apar from "../Assets/Lime.png";
import opner from "../Assets/opner.png"

const Home = () => {
  return (
     
    <HeroSection>
        <div className="opner">
        <img src={opner} alt="Pop" />
         
        </div>
        <div className="HeroText">
            <h1>Compostable</h1>
        </div>
    </HeroSection>
  )
}

export default Home


const HeroSection = styled.section`
    background: url(${Hero});
    background-position: center;
    background-repeat: no-repeat;
    background-size:cover;
    z-index: 1;
    margin-top: 80px;
    height:calc(100vh - 80px);
      position: relative;

      .opner{
        width:67.07px;
        height:42.39px;
        position: absolute;
        top:1%;
        z-index: 3;
        left: 47.5%;


        img{
            width: 100%;
            height: 100%;
        }
      }

    .HeroText{
        position: absolute;
        top:50%;
        left:50%;
        transform: translate(-50%, -50%);

        h1{
            font-size: 156px;
            font-weight:800;
            line-height:100%;
            text-transform: uppercase;
            color: #FFFFFF66;
        }
        &::before{
            content: "";
            background: url(${Bottle});
            background-position: center;
            background-repeat: no-repeat;
            background-size:cover;
            height: 581px;
            width:150px;
            display: block;
            position: absolute;
            top:50%;
            left:50%;
            transform:translate(-50%, -50%);
        }
        &::after{
            content: "";
            background: url(${apar});
            width: 150px;
            height: 111px;
            background-position:center;
            background-repeat: no-repeat;
            background-size:cover;
            position: absolute;
            top:170%;
            left: 50%;
            transform: translate(-50%, -50%);

        }

    }
    
`