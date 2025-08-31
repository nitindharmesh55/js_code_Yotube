import React from 'react'
const myName = "NitinDharmesh";

const mul = (a, b) => a * b;

const Expression = () => {
  return (
    <div>
        <h1>
            {myName}
        </h1>
        <h1> 2   * 2 = {mul(2 , 2)}</h1>
    </div>
  )
}

export default Expression