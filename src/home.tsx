import './App.css'

function App() {

  return (
    <>
      {/* Navigation Bar */}
      <nav className="navbar">
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/contact">Contact</a></li>
           <li><a href="/leavenote">Leave A Note!</a></li>
        </ul>
      </nav>

      {/* Main Content */}
      <header id="home" className="hero">
        <div className="profile-section">
          <img 
            src="/btm.jpg" 
            alt="Brian Munger" 
            className="profile-image"
          />
          <h1>Brian Munger</h1>
          <p className="tagline">Welcome to my website!</p>
        </div>
      </header>
    </>
  )
}

export default App
