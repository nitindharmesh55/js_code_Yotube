import React from 'react'

const ProductF = () => {

    const products = [
  {
    name: "Laptop",
    price: 55000,
    type: "Electronics",
  },
  {
    name: "Headphones",
    price: 2000,
    type: "Electronics",
  },
  {
    name: "Chair",
    price: 3500,
    type: "Furniture",
  },
  {
    name: "Book",
    price: 500,
    type: "Stationery",
  },
  {
    name: "T-shirt",
    price: 800,
    type: "Clothing",
  },
];

  return  <div>
    {
        products.map((items, i) =>(
            <User {...items}/>
        ))
    }
    
  </div>
}

const User = ({name, price, type})=>{

    return <div>
        <p>Name:{name}</p>
        <p>Price:${price}</p>
        <p>Type:{type}</p>
        <hr />
    </div>

}

export default ProductF