import './Header.css'

const Header = ({ activeSection }) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <a href="#home" className="brand">
            SUMIT
          </a>
          
          <nav>
            <ul className="nav">
              <li><a href="#home" className={activeSection === 'home' ? 'active' : ''}>Home</a></li>
              <li><a href="#about" className={activeSection === 'about' ? 'active' : ''}>About</a></li>
              <li><a href="#resume" className={activeSection === 'resume' ? 'active' : ''}>Resume</a></li>
              <li><a href="#services" className={activeSection === 'services' ? 'active' : ''}>Services</a></li>
              <li><a href="#skills" className={activeSection === 'skills' ? 'active' : ''}>Skills</a></li>
              <li><a href="#languages" className={activeSection === 'languages' ? 'active' : ''}>Languages</a></li>
              <li><a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>Projects</a></li>
              <li><a href="#blog" className={activeSection === 'blog' ? 'active' : ''}>My Blog</a></li>
              <li><a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>Contact</a></li>
            </ul>
          </nav>
          
          <button className="mobile-menu-toggle">
            ☰
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
