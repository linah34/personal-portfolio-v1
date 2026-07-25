import { useState } from 'react'
import '../style.css'
import portrait from "./assets/portrait.jpg";
import residualmagic from "./assets/residual-magic.png";
import spaghettaway from "./assets/spaghettaway.jpg";
import reactmovie from "./assets/react-movie.png";
import paintsoftware from "./assets/paint-software.png"
import SocialButtons from "./SocialButtons";

function App() {
  return (
  <>
      <div className="carousel">
      <div className="group">
        <div className="card">★❤︎★⁠</div>
        <div className="card">✦❤︎✦</div>
        <div className="card">❤︎⁠</div>
        <div className="card">✦❤︎✦⁠</div>
        <div className="card">★❤︎★⁠</div>
        <div className="card">✦❤︎✦⁠</div>
      </div>
      <div aria-hidden="true" className="group">
        <div className="card">★❤︎★⁠</div>
        <div className="card">✦❤︎✦</div>
        <div className="card">❤︎⁠</div>
        <div className="card">✦❤︎✦⁠</div>
        <div className="card">★❤︎★⁠</div>
        <div className="card">✦❤︎✦⁠</div>
      </div>
    </div>
    <header id="top">
      <nav>
        <ul>
          <li><a href="index.html">Linah Bergmanis</a></li>
          <li><a href="#my-projects">Projects</a></li>
          <li><a href="#my-socials">Socials</a></li>
        </ul>
      </nav>

      <div className="flex-container">
        <img height="400px" width="300px" src={portrait} alt="Portrait"/>

        <div className="text-container">
          <h1>Hiya there :D</h1>
          <p>I'm currently a third-year student studying Computer Science and Technology, Coding & Society at the University of Toronto! Design and technology is my passion, and I'm excited to get more involved in full-stack development for the best of both worlds. I have strong experience in graphic design and event management, as well as a solid technical foundation in programming.</p>

          <a
            href="https://www.linkedin.com/in/linah-bergmanis-482281397/"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button"
          >Connect with me on LinkedIn</a>
          <a href="#my-projects" className="cta-button secondary">Take a Peek at my Projects</a>
        </div>

      </div>
    </header>

    <section id="my-projects">
      <h2>My Projects</h2>
      <div className="grid-container">
        <img style={{ gridArea: "img-1" }} src={reactmovie} alt="Popular-Movies Search"/>
        <img style={{ gridArea: "img-2" }} src={paintsoftware} alt="Painting Software"/>
        <img style={{ gridArea: "img-3" }} src={spaghettaway} alt="Game: Spaghettaway"/>
        <img style={{ gridArea: "img-4" }} src={residualmagic} alt="Immersive Environment Design"/>
      </div>
    </section>

    <section id="my-socials">
      <h2>My Socials</h2>
      <p>Learn more about my projects on itch.io and Github! Games are on itch.io while the rest are on Github. I'm always open to connect!</p>
      <p></p>
    <SocialButtons></SocialButtons>
    </section>

    <a href="#top" className="back-to-top">
      ↑ Back to Top
    </a>

    <div className="carousel">
      <div className="group">
        <div className="card">★❤︎★⁠</div>
        <div className="card">✦❤︎✦</div>
        <div className="card">❤︎⁠</div>
        <div className="card">✦❤︎✦⁠</div>
        <div className="card">★❤︎★⁠</div>
        <div className="card">✦❤︎✦⁠</div>
      </div>
      <div aria-hidden="true" className="group">
        <div className="card">★❤︎★⁠</div>
        <div className="card">✦❤︎✦</div>
        <div className="card">❤︎⁠</div>
        <div className="card">✦❤︎✦⁠</div>
        <div className="card">★❤︎★⁠</div>
        <div className="card">✦❤︎✦⁠</div>
      </div>
    </div>
    </>
  )
}

export default App
