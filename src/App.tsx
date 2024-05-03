import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import BookRecs from './pages/BookRecs'
import Preview from './pages/Preview'
import Signup from './pages/AWS/Signup'

function App() {

  const [loggedIn, setLoggedIn] = React.useState(false)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
