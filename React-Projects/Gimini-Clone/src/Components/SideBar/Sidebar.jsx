import React, { useState } from 'react'
import "./Sidebar.css"
import {assets} from "../../Assest/gemini-clone-assets/assets/assets";

const Sidebar = () => {

    const [extended, setExtended] = useState(false)
  return (
    <div className='Sidebar'>

        <div className="top">
            <img onClick={()=> setExtended(prev => !prev)} className='menu' src={assets.menu_icon} alt="" />
            <div className="new-chat">
                <img src={assets.plus_icon} alt="" />
                {extended?<p>New Chat</p>:null}
            </div>
            {extended?<div className="recent">
                <p className="recent_title">Recent</p>
                <div className="recent-entry">
                    <img src={assets.message_icon} alt="" />
                    <p>What is React...</p>
                </div>
            </div>:null 
        
        }
            

        </div>

        {/* Top part end here now */}


        <div className="bottom">


            <div className="bottom-items recent-entry">
                <img src={assets.question_icon} alt="" />
                {extended?<p>help</p>:null}
            </div>

            
            <div className="bottom-items recent-entry">
                <img src={assets.history_icon} alt="" />
                {extended?<p>history</p>:null}
            </div>

            
            <div className="bottom-items recent-entry">
                <img src={assets.setting_icon} alt="" />
                {extended?<p>Setting</p>:null}
            </div>

        </div>
    </div>
  )
}

export default Sidebar