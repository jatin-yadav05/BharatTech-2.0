import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home'
import SignIn from './components/SignIn'
import Login from './components/Login'
import Not_found from './components/Not_found'

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="*" element={<Not_found/>}/>
      </Routes>
    </Layout>
  )
}

export default App