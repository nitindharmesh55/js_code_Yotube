import React from 'react'
import styled from 'styled-components'
import Break from "../Assets/Break.png";
import Break2 from "../Assets/Break2.png";

export const Pollution = () => {
  return (
    <PlContainer>
      <img src={Break} alt="img" />
      <div className="breakk">
        <div className="plText">
          <div className="plt1">
            <h2>Choose Apara.</h2>
            <p>Reduce Plastic Pollution.</p>
          </div>

          <div className="plt2">
            <p>Every bottle you drink is a step away
              <br /><span>
                from plastic pollution. </span><br />
              Together, we’re making impact measurable.</p>
          </div>
        </div>

        <div className="plCount">
          <h2>
            <span>75+</span>
            <h3>Places Serving Sustainbility</h3>
          </h2>

          <h2>
             <span>50,000+</span>
            <h3>Eco Botlles Distributed</h3>
          </h2>

          <h2>
             <span>90%</span>
            <h3>Lower Carbon Footprint Than PET</h3>
          </h2>
           <h2>
             <span>5,000+</span>
            <h3>Custom Branding Botlles</h3>
          </h2>

        </div>
      </div>

      <img src={Break2} alt="" className='btm' />

    </PlContainer>
  )


}


const PlContainer = styled.section`
  background: white;
  height: 798px;
 

  img{
    height: 186px;
    width: 100%;
  }
  .btm{
    margin-top: 70px;
  }
  .breakk{
    /* width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-content: center; */
    /* gap: 320px; */
    /* margin: 0px auto; */
    /* background: red; */

  }
  .plCount{
    display: flex;
    /* justify-content: center; */
    gap: 20px;
    align-content: center;
    margin-left: 100px;
    margin-top: 40px;
    h2{
      width: 310px;
      span{
        font-size: 48px;
        color:rgba(0, 175, 57, 1) ;
      }
    }
    h3{
      font-size:14px;
      font-weight: 500;
      line-height: 100%;
    }
  }

  .plText{
    display: flex;
    justify-content: space-between;
    
    align-content: center;
    margin-top: 120px;
    /* width: 1300px; */
    /* margin: 120px auto; */

    .plt1{
      display: flex;
      flex-direction: column;
      margin-left: 100px;

      h2 , p{
        font-size: 48px;
        font-weight: 700;
        line-height: 100%;
      }
      h2{
        color: rgba(0, 175, 57, 1);
      }
      p{
        color:rgba(36, 54, 45, 1);
      }
      
    }
    .plt2{
      width: 375px;
      height: 78px;
      text-align: right;
      margin-right: 100px;
      p{
        width: 375px;
        font-size: 18px;
        font-weight:500 ;

        span{
         color: green;
        }
      }
    }
  }

  /* &::after{
    content: "";
    background: url(${Break});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 186px;
    z-index: 100;
  } */

`