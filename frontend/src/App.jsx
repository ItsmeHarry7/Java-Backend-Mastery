import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Register from './pages/Auth/Register'
import Login from './pages/Auth/Login'
import './App.css'

function App() {
  return (
    <Router>
      {/* Universal Hub Navigation Header */}
      <nav style={navStyle}>
        <div style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>🌐 API Learning Hub</div>
        <div style={{ display: 'flex', gap: '15px' }}>
          <Link style={linkStyle} to="/register">Register (Auth)</Link>
          <Link style={linkStyle} to="/login">Login (Auth)</Link>
          {/* You will add your future links (Cache, RateLimit, etc.) right here! */}
        </div>
      </nav>

      {/* Main Container Viewport */}
      <section id="center" style={{ minHeight: '60vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Routes>
          <Route path="/" element={
            <div style={{ textAlign: 'center' }}>
              <h1>Welcome to your Backend Mastery Console</h1>
              <p>Select an API concept from the navigation menu above to start testing.</p>
            </div>
          } />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </Router>
  )
}

// Minimal inline navigation styling
const navStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '15px 30px',
  background: '#1a1a1a',
  borderBottom: '1px solid #333',
  color: '#fff'
}

const linkStyle = {
  color: '#646cff',
  textDecoration: 'none',
  fontWeight: '500'
}

export default App