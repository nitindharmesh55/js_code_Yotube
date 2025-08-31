import React from 'react'
const Product = {
  name:"Hp-Laptop",
  price:"$1220",
  avalible:"in-stocke"
}

const ProductInfo = () => {
  return (
    <div>
        <p>Name: {Product.name}</p>
        <p>Price:{Product.price}</p>
        <p>Avalibility:{Product.avalible}</p>
    </div>
  )
}

export default ProductInfo