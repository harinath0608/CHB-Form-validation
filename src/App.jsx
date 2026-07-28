import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Student from './Styling/Student'
import Card from './Styling/Card'
import Counter from './UseState-ReactHook/Counter'
import ObjectState from './UseState-ReactHook/ObjectState'
import ArrayState from './UseState-ReactHook/ArrayState'
import FormInputs from './UseState-ReactHook/FormInputs'
import Rendering_List from './Rendering_Lists/Rendering_List'
import FormValidation from './Events&FormHandling/FormValidation'
import FetchAPI from './UseEffect/FetchAPI'
import Header from './React-Router-DOM/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './React-Router-DOM/pages/Home'
import About from './React-Router-DOM/pages/About'
import Contact from './React-Router-DOM/pages/Contact'
import Blog from './React-Router-DOM/pages/Blog'
import Products from './React-Router-DOM/pages/Products'
import ProductDetail from './React-Router-DOM/pages/ProductDetail'


function App() {


  return (

    <>

      <Header />

      <Routes>



        <Route path='/' element={<Home />} />

        <Route path='/About' element={<About />} />

        <Route path='/Contact' element={<Contact />} />

        <Route path='/Blog' element={<Blog />} />

        <Route path='/Products' element = { <Products /> }/>


        <Route path='/products/:id' element = { <ProductDetail/> }/>

      </Routes>




    </>
  )
}

export default App
