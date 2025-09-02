import React from 'react'

const ProductList = () => {

    const UserProduct = [
  { id: 1, name: "iPhone 14", price: 799, availability: true, type: "Electronics" },
  { id: 2, name: "Nike Air Max", price: 120, availability: false, type: "Footwear" },
  { id: 3, name: "Samsung TV", price: 450, availability: true, type: "Electronics" },
  { id: 4, name: "Levi's Jeans", price: 60, availability: true, type: "Clothing" },
  { id: 5, name: "Sony Headphones", price: 99, availability: false, type: "Electronics" },
  { id: 6, name: "Wooden Chair", price: 75, availability: true, type: "Furniture" },
  { id: 7, name: "Dell Laptop", price: 999, availability: true, type: "Electronics" }
];

  return (
    <div>
 {
    UserProduct.map(({id, name, price, availability, type }) => (
        <ul key={id}>
            <li>
                Name:{name} <br />
                Price:{price} <br />
                availability:{availability} <br />
                type:{type}
            </li>
        </ul>
    ))
 }


    </div>
  )
}

export default ProductList