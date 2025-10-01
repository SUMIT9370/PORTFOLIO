import './Home.css'

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="container">
        <div className="home-content">
          <div className="home-text">
            <p className="greeting">HELLO!</p>
            <h1 className="home-title">
              I'm <span className="accent">SUMit</span> <span className="accent">Patil</span>
            </h1>
            <h2 className="home-subtitle">Fullstack | AIML | DEOVPS</h2>
            <p className="home-quote">“I am thankful to all those who SAID NO, Because of them, I DID IT MYSELF.”</p>
            <div className="home-buttons">
              <a href="#contact" className="btn btn-primary">HIRE ME</a>
              <a href="#projects" className="btn btn-secondary">MY WORKS</a>
            </div>
          </div>
          <div className="home-image">
            <img src="/image.png" alt="Sumit Patil" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
