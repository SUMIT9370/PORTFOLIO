import './Languages.css'

const Languages = () => {
  const langs = [
    { name: 'English', level: 'Professional working proficiency' },
    { name: 'Hindi', level: 'Full professional proficiency' },
    { name: 'Marathi', level: 'Full professional proficiency' }
  ]

  return (
    <section id="languages" className="languages">
      <div className="container">
        <h2 className="section-title" data-bg="Languages">Languages</h2>
        <p className="section-subtitle">Languages I communicate in with proficiency levels.</p>

        <ul className="languages-list">
          {langs.map((l, i) => (
            <li key={i} className="language-item">
              <span className="language-name">{l.name}</span>
              <span className="language-level">{l.level}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Languages


