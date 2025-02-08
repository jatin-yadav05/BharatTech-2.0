import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './Layout'

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/pricing" element={<h1>Pricing</h1>} />
      </Routes>
    </Layout>
  )
}

export default App