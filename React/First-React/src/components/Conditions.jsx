// import React from 'react'

// const Validpassword = () => <h1>Valid Password</h1>
// const Invalidpassword = () => <h1>InValidpassword</h1>

// export const Conditions = () => {
//   return (
//     <User isValid={false}></User>
//   )
// }

// const User = ({isValid}) =>{
//     if(isValid)
//     {
//         return <Validpassword />
//     }
//     return <Invalidpassword />
//

const Cart = () =>{
  const Items = ["Love", "Anger", "Sad", "Sympathy", "Empathy"];
   

  return <div>

   <h1>Cart</h1>

   {Items.length > 0 && <h2>Item You have {Items.length} in Your Cart</h2>}
   {/* Showing all the  element */}

   <ul>
    {Items.map((index, i) => (
      <li key={i} >{index}</li>
    ))}
   </ul>
  </div>
}

export default Cart;