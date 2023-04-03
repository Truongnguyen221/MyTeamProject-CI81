import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Reading from './pages/Reading/Reading'
import Settings from './pages/Settings/Settings'
import Todolist from './pages/Todolist/Todolist'
import Login from './auth/Login'
import Signup from './auth/Signup'
import ExploreFeed from './pages/Feed/Explore'
import BusinessFeed from './pages/Feed/BusinessFeed'
import ScienceFeed from './pages/Feed/ScienceFeed'
import TechnologyFeed from './pages/Feed/TechnologyFeed'

function App() {
   return (
      <Router>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<ExploreFeed />} />
            <Route path="/explore/1" element={<BusinessFeed />} />
            <Route path="/explore/2" element={<ScienceFeed />} />
            <Route path="/explore/3" element={<TechnologyFeed />} />
            <Route path="/reading" element={<Reading />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/todolist" element={<Todolist />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route
               path="*"
               element={
                  <div className="bg-gradient-to-r from-green-500 to-green-200 h-screen w-full flex justify-center items-center">
                     <h1 className="text-4xl font-[inter] font-semibold">
                        Error 404 : Page not found
                     </h1>
                  </div>
               }
            />
         </Routes>
      </Router>
   )
}

export default App
