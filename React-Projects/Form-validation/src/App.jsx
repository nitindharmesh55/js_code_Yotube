import React from 'react'
import "./App.css"
import { Nav } from './Components/Navigation/Nav';
import { ContactHeader } from './Components/ContactHeader/ContactHeader';
import { ContactForm } from './Components/ContactForm/ContactForm';



const App = () => {
  return (
    <div>
      <Nav />
      <main className='main_container'>
        <ContactHeader />
        <ContactForm />

      </main>

    </div>
  )
}

export default App;