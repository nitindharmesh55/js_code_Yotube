import React from 'react'

const UserList = () => {
    const people = [
  { id: 1, name: "Nitin Dharmeh", age: 21 },
  { id: 2, name: "James Miller", age: 25 },
  { id: 3, name: "Emily Johnson", age: 28 },
  { id: 4, name: "Michael Brown", age: 30 },
  { id: 5, name: "Sophia Wilson", age: 23 },
  { id: 6, name: "Daniel Smith", age: 27 },
  { id: 7, name: "Olivia Davis", age: 26 }
];

  return (
    <div>
        {   

            people.map(({id, name, age})=> (




                <ul key={id}>
                    <li>Name:{name} Age:{age}</li>
                </ul>
            ))
        }
    </div>
  )
}

export default UserList