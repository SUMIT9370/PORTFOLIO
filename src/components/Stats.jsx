import './Stats.css'

const Stats = () => {
  const items = [
    { value: '25+', label: 'Projects Completed' },
    { value: '10+', label: 'Certificates & Badges' },
    { value: '5+', label: 'Domains Explored' },
    { value: '24/7', label: 'Learning Mindset' }
  ]

  return (
    <section className="stats">
      <div className="container stats-grid">
        {items.map((i, idx) => (
          <div key={idx} className="stat">
            <div className="stat-value">{i.value}</div>
            <div className="stat-label">{i.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Stats


