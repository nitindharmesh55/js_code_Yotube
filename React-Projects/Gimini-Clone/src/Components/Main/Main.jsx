import React from 'react'
import "./Main.css"
import { assets } from '../../Assest/gemini-clone-assets/assets/assets'

const Main = () => {
  return (
    <div className='Main'>
        <div className="nav">
            <p>Neural Link</p>
            <img src={assets.user_icon} alt="User-icons" />
        </div>
        {/* mainContainer */}

        <div className="main-container">
            {/* Greet start from here */}
            <div className="greet">
                <p><span>Hey, Nile</span></p>
                <p>What's Up so What's special..</p>
 
            </div>
            {/* Greet end here */}


            {/* Caards start from here */}
            <div className="cards">

                <div className="card">
                    <p>Tell me more about the AI/Ml the project we've been working</p>
                    <img src={assets.compass_icon} alt="search" />
                </div>

                <div className="card">
                    <p>What are the most common algorithms used in machine learning?</p>
                    <img src={assets.bulb_icon} alt="search" />
                </div>


                <div className="card">
                    <p>How does supervised learning differ from unsupervised learning?</p>
                    <img src={assets.message_icon} alt="search" />
                </div>


                <div className="card">
                    <p>What ethical concerns should be considered when deploying AI systems?</p>
                    <img src={assets.code_icon} alt="search" />
                </div>

            </div>

            {/* Cards end here */}

            {/* Main bottom start from here */}
            <div className="main-bottom">
                 <div className="search-box">
                    <input type="text" placeholder='Enter Prompt here' />
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        <img src={assets.send_icon} alt="" />
                    </div>
                 </div>
                 <p className="bottom-info">
                    “Exploring how machine learning algorithms improve decision-making by analyzing large datasets in real time.”
                 </p>
            </div>
            {/* Main bottom end here */}
        </div>
    </div>
  )
}

export default Main