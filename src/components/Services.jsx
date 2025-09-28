import './Services.css'

const Services = () => {
  const services = [
    {
      icon: '🤖',
      title: 'Machine Learning Solutions',
      description: 'End-to-end ML pipelines, predictive analytics, and AI-driven automation for business intelligence.'
    },
    {
      icon: '💻',
      title: 'Full-Stack Development',
      description: 'Custom web applications using Python (Django/Flask), React, and modern cloud technologies.'
    },
    {
      icon: '📊',
      title: 'Data Science & Analytics',
      description: 'Data visualization, statistical modeling, and ETL pipelines for data-driven decision making.'
    },
    {
      icon: '☁️',
      title: 'Cloud Solutions',
      description: 'GCP deployment, scalable microservices, and infrastructure-as-code implementations.'
    },
    {
      icon: '🔧',
      title: 'Process Automation',
      description: 'Custom automation scripts and tools to streamline business processes and improve efficiency.'
    },
    {
      icon: '📈',
      title: 'Consulting & Mentoring',
      description: 'Technical consulting, team mentoring, and knowledge transfer for development teams.'
    }
  ]

  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title" data-bg="Services">Services</h2>
        <p className="section-subtitle">
          I offer a wide range of web development and design services to help your business grow.
        </p>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
