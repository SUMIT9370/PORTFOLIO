import './Skills.css'

const Skills = () => {
  const skills = [
    { name: 'Postman', percentage: 85 },
    { name: 'Node.js', percentage: 80 },
    { name: 'Zod', percentage: 70 },
    { name: 'MongoDB', percentage: 80 },
    { name: 'Express.js', percentage: 80 },
    { name: 'HTTP / Auth', percentage: 75 },
    { name: 'Python', percentage: 90 },
    { name: 'Java', percentage: 75 },
    { name: 'C', percentage: 70 },
    { name: 'OOP', percentage: 85 },
    { name: 'Data Structures', percentage: 80 },
    { name: 'Artificial Intelligence', percentage: 75 },
    { name: 'Generative AI', percentage: 65 },
    { name: 'Microsoft Word', percentage: 90 },
    { name: 'CS Fundamentals', percentage: 80 }
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title" data-bg="Skills">My Skills</h2>
        <p className="section-subtitle">
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.
        </p>
        
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-header">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percentage">{skill.percentage}%</span>
              </div>
              <div className="skill-bar">
                <div 
                  className="skill-progress" 
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
