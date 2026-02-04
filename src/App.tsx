import './App.css'

function App() {

  return (
    <>
      {/* Navigation Bar */}
      <nav className="navbar">
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Main Content */}
      <header id="home" className="hero">
        <h1>Brian Munger's Website</h1>
      </header>
    </>
  )
}

export default App
