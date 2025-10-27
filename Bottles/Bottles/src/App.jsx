import React from 'react'
import Header from './Components/Header'
import "./App.css"
import Home from './Components/Home'
import HeroText from './Components/HeroText'
import { Pollution } from './Components/Pollution'
export const App = () => {
  return (
    <>
    <Header/>
    <Home/>
    <HeroText/>
    <Pollution/>
    
    </>
  )
}
