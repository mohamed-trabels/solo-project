import React from 'react'
import './App.css'
import { Route, Link, Routes } from 'react-router-dom'

import PizzaCategory from './PizzaCategory'
import SandwichCategory from './SandwichCategory'
import BarbecueCategory from './BarbecueCategory'
import SeafoodCategory from './SeafoodCategory'

function App() {
  return (
    <div className="menu-page">
      <div className="welcome">
        <h1>Welcome to Our Restaurant</h1>
        <p>Explore our delicious menu options below.</p>
      </div>
      <div className="menu-categories">
        <Link to="/pizza">
          <div className="menu-category">
            <h2>Pizza</h2>
            <p>Delight in our mouth-watering pizza creations.</p>
          </div>
        </Link>
        <Link to="/sandwich">
          <div className="menu-category">
            <h2>Sandwich</h2>
            <p>Discover our assortment of delectable sandwiches.</p>
          </div>
        </Link>
        <Link to="/barbecue">
          <div className="menu-category">
            <h2>Barbecue</h2>
            <p>Indulge in our savory barbecue dishes.</p>
          </div>
        </Link>
        <Link to="/seafood">
          <div className="menu-category">
            <h2>Seafood</h2>
            <p>Experience the freshness of our seafood options.</p>
          </div>
        </Link>
      </div>
      
      <Routes>
        <Route path="/pizza" element={<PizzaCategory />} />
        <Route path="/sandwich" element={<SandwichCategory />} />
        <Route path="/barbecue" element={<BarbecueCategory />} />
        <Route path="/seafood" element={<SeafoodCategory />} />
      </Routes>
    </div>
  )
}

export default App





