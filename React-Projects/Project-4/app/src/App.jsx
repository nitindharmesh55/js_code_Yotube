import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import bgImg from "./bg.png";

// Mock data - you can customize this
const MOCK_FOOD_DATA = [
  { id: 1, name: "Margherita Pizza", category: "Dinner", price: 12.99, image: "🍕" },
  { id: 2, name: "Blueberry Pancakes", category: "Breakfast", price: 8.99, image: "🥞" },
  { id: 3, name: "Cheeseburger", category: "Lunch", price: 10.99, image: "🍔" },
  { id: 4, name: "Spaghetti Carbonara", category: "Dinner", price: 14.99, image: "🍝" },
  { id: 5, name: "Avocado Toast", category: "Breakfast", price: 7.99, image: "🥑" },
  { id: 6, name: "Caesar Salad", category: "Lunch", price: 9.99, image: "🥗" },
];

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    // Simulate API call with timeout
    const timer = setTimeout(() => {
      setData(MOCK_FOOD_DATA);
      setLoading(false);
    }, 1000); // 1 second delay to simulate network

    return () => clearTimeout(timer);
  }, []);

  const filteredData = selectedCategory === 'All' 
    ? data 
    : data?.filter(food => food.category === selectedCategory);

  if (loading) return <Loading>Loading delicious food...</Loading>;

  return (
    <MainContainer>
      <TopContainer>
        <div className="logo">
          <h1 style={{color:"red"}}>Nitin<span style={{color:"white"}}>Dharmesh</span></h1>
        </div>
        <div className="search">
          <input type="text" placeholder='search food' />
        </div>
      </TopContainer>

      <FilterContainer>
        {['All', 'Breakfast', 'Lunch', 'Dinner'].map(category => (
          <Button 
            key={category}
            active={selectedCategory === category}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Button>
        ))}
      </FilterContainer>

      <FoodCardContainer>
        <FoodGrid>
          {filteredData?.map(food => (
            <FoodCard key={food.id}>
              <FoodEmoji>{food.image}</FoodEmoji>
              <FoodName>{food.name}</FoodName>
              <FoodCategory>{food.category}</FoodCategory>
              <FoodPrice>${food.price}</FoodPrice>
            </FoodCard>
          ))}
        </FoodGrid>
      </FoodCardContainer>
    </MainContainer>
  )
}

export default App;

// Styled Components
const MainContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  background: #1a1a1a;
  min-height: 100vh;
  color: white;
`

const TopContainer = styled.section`
  min-height: 140px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;

  .search input {
    background-color: transparent;
    border: 1px solid red;
    font-size: 16px;
    height: 40px;
    color: white;
    padding: 12px;
    border-radius: 5px;
  }
`

const FilterContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  margin-bottom: 40px;
`

const Button = styled.button`
  background-color: ${props => props.active ? '#ff2525' : '#FF4343'};
  border-radius: 5px;
  padding: 8px 16px;
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ff2525;
  }
`

const FoodCardContainer = styled.section`
  background: url(${bgImg});
  background-size: cover;
  min-height: calc(100vh - 210px);
  padding: 20px;
`

const FoodGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  padding: 20px;
`

const FoodCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 10px;
  border: 1px solid rgba(255, 67, 67, 0.3);
  text-align: center;
  backdrop-filter: blur(10px);
`

const FoodEmoji = styled.div`
  font-size: 3rem;
  margin-bottom: 10px;
`

const FoodName = styled.h3`
  color: white;
  margin: 10px 0;
  font-size: 1.2rem;
`

const FoodCategory = styled.p`
  color: #FF4343;
  margin: 5px 0;
  text-transform: uppercase;
  font-size: 0.9rem;
`

const FoodPrice = styled.p`
  color: #00ff00;
  font-size: 1.1rem;
  font-weight: bold;
  margin: 10px 0;
`

const Loading = styled.div`
  text-align: center;
  padding: 100px;
  font-size: 24px;
  color: white;
`