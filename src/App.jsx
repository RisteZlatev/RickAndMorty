import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import CharactersPage from './pages/CharactersPage'
import DetailsPage from './pages/DetailsPage'
import FavoritesPage from './pages/FavoritesPage'

function App() {

  return (
   <div>
    <Navbar/>
    <div>
      <Routes>
        <Route path="/" element = {<CharactersPage />} />
        <Route path="/favorites" element = {<FavoritesPage />} />
        <Route path="/character/:id" element = {<DetailsPage />} />
      </Routes>
    </div>
   </div>
  )
}

export default App
