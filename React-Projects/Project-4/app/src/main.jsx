import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import { createGlobalStyle } from 'styled-components'
const Globalstyle = createGlobalStyle`
*{

 margin:0;
 padding:0;
 box-sizing:border-box;
}
 body{
 background:#323334;
 color:white;
 min-height:100vh;
 
 }


`
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Globalstyle/>
    <App />
  </StrictMode>,
)
