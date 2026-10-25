function App() {
  return (
    <div className="App">
      <header className="header">
        <nav className="navbar">
          <h1>Asherah</h1>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section id="home" className="hero">
        <h2>Welcome to My Portfolio</h2>
        <p>I'm a passionate developer building amazing web experiences</p>
      </section>

      <section id="about" className="about">
        <h2>About Me</h2>
        <p>I love creating clean, functional code and learning new technologies.</p>
      </section>

      <section id="projects" className="projects">
        <h2>My Projects</h2>
        <div className="project-grid">
          <div className="project-card">
            <h3>Project 1</h3>
            <p>I created a simple portfolio website using HTML, CSS and Javascript</p>
          </div>
          <div className="project-card">
            <h3>Project 2</h3>
            <p>I practiced React js by following a tutorial and built a sample e-commerce website</p>
          </div>
          <div className="project-card">
            <h3>Project 3</h3>
            <p>I created a simple contact form to practice HTML form tags and basic CSS</p>
          </div>
        </div>
      </section>

      <footer id="contact" className="footer">
        <h2>Get In Touch</h2>
        <p>Email: asherah@example.com</p>
        <p>&copy; 2026 Asherah. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

