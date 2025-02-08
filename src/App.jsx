import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home'
import SignIn from './components/SignIn'
import Login from './components/Login'
import Pricing from './components/Pricing'
import FAQItem from './components/Faq'
import Not_found from './components/Not_found'
import AboutUs from './components/pages/AboutUs'

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/Pricing" element={<Pricing/>}/>
        <Route path="/Faq" element={<FAQItem/>}/>
        <Route path="/*" element={<Not_found/>}/>
        <Route path="/About" element={<AboutUs/>}/>
      </Routes>
    </Layout>
  )
}

export default App