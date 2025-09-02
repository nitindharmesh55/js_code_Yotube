import React from 'react'

const Prop = (props) => {
  return <User name="Nitin" age={22} ismarried={false} hobbies={["Singing", "Guitar", "figting", "watching Animme"]}/>
}

const User = (props) =>{
  
  return <div>
   <p>Name:{props.name}</p>
   <p>Age:{props.age}</p>
   <p>Is he Married: {props.ismarried}</p>
   <div>
    {
      props.hobbies.map((index)=>(
        <ul>
          <li>{index}</li>
        </ul>
        
      ))
    }
    </div>   
  </div>
}

export default Prop