import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home'
import SignIn from './components/SignIn'
import Login from './components/Login'
import Pricing from './components/Pricing'
import FAQItem from './components/Faq'

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/Pricing" element={<Pricing/>}/>
        <Route path="/Faq" element={<FAQItem/>}/>
  
      </Routes>
    </Layout>
  )
}

export default App