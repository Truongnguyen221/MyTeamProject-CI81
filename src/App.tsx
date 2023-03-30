import React from 'react'
import {
   BrowserRouter as Router,
   Routes,
   Route,
   Navigate,
} from 'react-router-dom'
import ExploreFeed from './pages/ExploreFeed'
import Home from './pages/Home'

function App() {
   return (
      <Router>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<ExploreFeed />} />
         </Routes>
      </Router>
   )
}

export default App
