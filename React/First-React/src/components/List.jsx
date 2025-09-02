import React from 'react'

const List = () => {
    const users = [
  { name: "Aarav Sharma", email: "aarav.sharma@example.com", age: 22 },
  { name: "Maya Patel", email: "maya.patel@example.com", age: 28 },
  { name: "Rohan Singh", email: "rohan.singh@example.com", age: 31 },
  { name: "Sara Khan", email: "sara.khan@example.com", age: 25 },
  { name: "Kabir Mehta", email: "kabir.mehta@example.com", age: 35 },
  { name: "Ananya Verma", email: "ananya.verma@example.com", age: 19 },
  { name: "Aditya Rao", email: "aditya.rao@example.com", age: 27 }
];

  return (
    <div>
   
   {
    users.map(({name, age, email}) => (
    
        <ul key={Math.random()}>
            <li>Name:{name}
                <br /> Age: {age} 
                 <br /> 
                 Emails: {email}
                 </li>
        </ul>

    ))
   }


    </div>
  )
}

export default List