import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import './styles/App.css'
import NavBar2 from './components/NavBar2'

const App = () => {
  return (
    <div className="app-container">
      {/* <NavBar /> */}
      <NavBar2 className="navbar" />

      <div className="bg-primary text-accent p-4">
        Tailwind custom color test
      </div>


      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </div>

      <footer className="footer">
        © {new Date().getFullYear()} Katelyn Mehner
      </footer>

    </div>
  )
}

export default App