import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home'
import SignIn from './components/SignIn'
import Login from './components/Login'
import Pricing from './components/Pricing'
import Faq from './components/Faq'
import Not_found from './components/Not_found'
import AboutUs from './components/pages/AboutUs'
import {GoogleOAuthProvider} from '@react-oauth/google'

let GoogleAuthWrapper = () => (
  <GoogleOAuthProvider clientId='101583258339-do78ls11ul37i2uf5drpp6sigkvksmjq.apps.googleusercontent.com'>
    <Login />
  </GoogleOAuthProvider>
)

let GoogleAuthSign = () => (
  <GoogleOAuthProvider clientId='101583258339-do78ls11ul37i2uf5drpp6sigkvksmjq.apps.googleusercontent.com'>
    <SignIn />
  </GoogleOAuthProvider>
)
const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signup" element={<GoogleAuthSign/>} />
        <Route path="/login" element={<GoogleAuthWrapper/>} />
        <Route path="/Pricing" element={<Pricing/>}/>
        <Route path="/Faq" element={<Faq/>}/>
        <Route path="/*" element={<Not_found/>}/>
        <Route path="/About" element={<AboutUs/>}/>
      </Routes>
    </Layout>
  )
}

export default App