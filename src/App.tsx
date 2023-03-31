import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ExploreFeed from './pages/ExploreFeed'
import Home from './pages/Home'
import Reading from './pages/Reading'
import Settings from './pages/Settings'
import Todolist from './pages/Todolist'
import Login from './auth/Login'
import Signup from './auth/Signup'

function App() {
   return (
      <Router>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<ExploreFeed />} />
            <Route path="/reading" element={<Reading />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/todolist" element={<Todolist />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
         </Routes>
      </Router>
   )
}

export default App
