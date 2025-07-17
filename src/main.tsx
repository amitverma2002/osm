// import { StrictMode } from 'react'

import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import {Routes, Route} from "react-router"
// import './index.css'
import Navbar from "./navbar.tsx"
// import App from './App.tsx'
// import Product from "./product.tsx"
// import Ads from "./ads.tsx"
// import Sales from "./sales.tsx"
// import Poster from "./poster.tsx"
 import Category from "./category.tsx"
 import Head from './Header.tsx'

 
createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  <BrowserRouter>
  {/* <Navbar />/ */}
    {/* <Product/>
    <Ads/>
    <Sales/>
    <Poster/>
    <App /> */}
    <Routes>
      <Route path='' element={<Navbar />}></Route>
      <Route path='/Category' element={<Category/>}> </Route>
      <Route path='/Head' element={<Head/>}> </Route>
 
{/*     
      <Route path="/Ads" element={<Ads/>}> </Route>
      <Route path="/Sales" element={<Sales/>}></Route>
      <Route path="/Poster" element={<Poster/>}></Route> */}  
      
    </Routes>
  {/* </StrictMode>, */}
  </BrowserRouter>
)
