import React from 'react';

const Skills = () => {
  const technicalSkills = [
    { name: 'Python & AI Development', percentage: '95%' },
    { name: 'Full-Stack Web (React, Node.js)', percentage: '90%' },
    { name: 'Data Analysis & Machine Learning', percentage: '85%' },
    { name: 'Database Management', percentage: '80%' }
  ];

  const tags = ["Python", "React.js", "Node.js", "JavaScript", "Machine Learning", "Deep Learning", "Data Analysis", "FastAPI", "SQL"];

  return (
    <section id="skills" className="section-container">
      <h2 className="section-title">Technical <span className="text-gradient">Proficiency</span></h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
        <div>
          {technicalSkills.map((skill, index) => (
            <div key={index} style={{ marginBottom: '25px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                <span style={{ fontWeight: 500 }}>{skill.name}</span>
                <span style={{ color: 'var(--text-secondary)' }}>{skill.percentage}</span>
              </div>
              <div className="progress-bg">
                <div className="progress-fill" style={{ width: skill.percentage }}></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="glass" style={{ padding: '40px', borderRadius: '16px' }}>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '20px' }}>Core Technologies</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {tags.map((tag, index) => (
              <span key={index} style={{
                padding: '8px 16px',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid var(--border-glass)',
                borderRadius: '8px',
                fontSize: '0.9rem',
                color: 'var(--text-secondary)'
              }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
