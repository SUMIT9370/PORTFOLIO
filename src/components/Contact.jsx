import { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! I will get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title" data-bg="Contact">Contact</h2>
        <p className="section-subtitle">
          Get in touch with me for any project or collaboration opportunities.
        </p>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">📧</div>
              <div>
                <h4>Email</h4>
                <p>sumitpail9370@gmail.com</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">📱</div>
              <div>
                <h4>Phone</h4>
                <p>+91 9370890749</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div>
                <h4>Location</h4>
                <p>Tasgaon, Maharashtra, India</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">💼</div>
              <div>
                <h4>LinkedIn</h4>
                <p>
                  <a href="https://www.linkedin.com/in/sumit-patil-582877240/" target="_blank" rel="noopener noreferrer">
                    linkedin.com/in/sumit-patil-582877240/
                  </a>
                </p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">🐙</div>
              <div>
                <h4>GitHub</h4>
                <p>
                  <a href="https://github.com/SUMIT9370" target="_blank" rel="noopener noreferrer">
                    github.com/SUMIT9370
                  </a>
                </p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">𝕏</div>
              <div>
                <h4>X (Twitter)</h4>
                <p>
                  <a href="https://x.com/Sumit147471" target="_blank" rel="noopener noreferrer">
                    x.com/Sumit147471
                  </a>
                </p>
              </div>
            </div>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
