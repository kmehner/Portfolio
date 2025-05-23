// src/components/NavBar.jsx (or just paste into App.jsx)
export default function NavBarTest() {
  return (
    <div className="min-h-screen p-6 bg-background">
      {/* 1) Built-in Tailwind check */}
      <div className="bg-red-500 text-white font-bold p-4 rounded mb-4">
        — If you see RED, Tailwind itself is working —
      </div>

      {/* 2) Custom primary color */}
      <div className="bg-primary text-font-light font-bold p-4 rounded mb-4">
        — If you see BLUE (#3498db), your `primary` color is loaded —
      </div>

      {/* 3) Custom accent color */}
      <div className="bg-accent text-font-light font-bold p-4 rounded">
        — If you see PINK (rgb(255, 47, 89)), your `accent` color is loaded —
      </div>
    </div>
  )
}



// import React from 'react'
// import { Routes, Route } from 'react-router-dom'
// import NavBar from './components/NavBar'
// import Home from './components/Home'
// import './styles/App.css'
// import NavBar2 from './components/NavBar2'

// const App = () => {
//   return (
//     <div className="app-container">
//       {/* <NavBar /> */}
//       <NavBar2 className="navbar" />

//       <div className="bg-primary text-accent p-4">
//         Tailwind custom color test
//       </div>


//       <div className="main-content">
//         <Routes>
//           <Route path="/" element={<Home/>} />
//         </Routes>
//       </div>

//       <footer className="footer">
//         © {new Date().getFullYear()} Katelyn Mehner
//       </footer>

//     </div>
//   )
// }

// export default App