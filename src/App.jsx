import React from 'react';
import './App.css';
function App() {
  const[page, setPage] = React.useState('home');
  return (
    <div className="App">
      <header className="header">
        <nav className="navbar">
          <h1>Asherah</h1>
          <ul className="nav-links">
            <li><button onClick={() => setPage('home')}>Home</button></li>
            <li><button onClick={() => setPage('about')}>About</button></li>
            <li><button onClick={() => setPage('projects')}>Projects</button></li>
            <li><button onClick={() => setPage('contact')}>Contact</button></li>
          </ul>
        </nav>
      </header>

      <section id="home" className="hero">
        <h2>Welcome to My Portfolio</h2>
        <p>I'm a passionate developer building amazing web experiences</p>
      </section>

      {page === 'about' && <section id="about" className="about">
        <h2>About Me</h2>
        <p>I love creating clean, functional code and learning new technologies.</p>
      </section>
      }

      {page === 'projects' && <section id="projects" className="projects">
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
      )}

      {page === 'contact' && 
        <footer id="contact" className='footer'>
        <h2>Get In Touch</h2>
        <p>Email: asherah@example.com</p>
        <p>&copy; 2026 Asherah. All rights reserved.</p>
      </footer>
   )}
    </div>
  );
}

export default App;

