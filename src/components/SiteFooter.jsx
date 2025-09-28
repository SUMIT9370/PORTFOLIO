import './SiteFooter.css'

const SiteFooter = () => {
  return (
    <footer className="site-footer">
      <div className="container footer-wrap">
        <div>© {new Date().getFullYear()} Sumit Patil</div>
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/sumit-patil-582877240/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/SUMIT9370" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://x.com/Sumit147471" target="_blank" rel="noreferrer">X</a>
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter


