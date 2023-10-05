import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Dashboard from './components/Dashboard';
import Jobs from './components/Jobs';
import Footer from './components/Footer';
import Create from './components/Create';
import { useState } from 'react'

function App() {    
  const [user, setUser] = useState(false)

  return (
    <Router>
      <div className="app">
        <Nav user={user} setUser={setUser} />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/jobs' element={<Jobs user={user} />} />
          <Route path='/create' element={<Create user={user} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;