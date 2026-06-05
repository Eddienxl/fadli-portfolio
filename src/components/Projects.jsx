import React from 'react';

const Projects = () => {
  return (
    <section id="portfolio" className="section-container">
      <h2 className="section-title">Featured <span className="text-gradient">Portfolio</span></h2>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '40px' }}>
        <span className="glass-pill" style={{ background: 'var(--accent-blue)', color: 'white' }}>All</span>
        <span className="glass-pill" style={{ color: 'var(--text-secondary)', background: 'transparent' }}>Enterprise</span>
        <span className="glass-pill" style={{ color: 'var(--text-secondary)', background: 'transparent' }}>AI / ML</span>
      </div>

      <div className="glass" style={{ borderRadius: '24px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
        <div style={{ height: '400px', width: '100%', borderBottom: '1px solid var(--border-glass)' }}>
          <img src="/images/simovi.jpg" alt="SIMOVI Dashboard" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
        </div>
        <div style={{ padding: '40px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
            <div>
              <span className="glass-pill" style={{ marginBottom: '15px' }}>PT PLN (Persero)</span>
              <h3 style={{ fontSize: '2rem', fontWeight: 700 }}>SIMOVI System</h3>
            </div>
          </div>
          
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '30px', maxWidth: '800px' }}>
            Sistem Informasi Monitoring Maturity Level & Evidensi HSSE. An enterprise-grade, comprehensive full-stack digital platform designed to rigorously monitor occupational health and safety metrics for state-owned enterprise PT PLN (Persero) UP2D Riau. Built from scratch with advanced data analytics capabilities.
          </p>

          <div style={{ display: 'flex', gap: '12px' }}>
            <span style={{ padding: '6px 12px', background: 'rgba(255,255,255,0.05)', borderRadius: '6px', fontSize: '0.85rem' }}>React</span>
            <span style={{ padding: '6px 12px', background: 'rgba(255,255,255,0.05)', borderRadius: '6px', fontSize: '0.85rem' }}>Node.js</span>
            <span style={{ padding: '6px 12px', background: 'rgba(255,255,255,0.05)', borderRadius: '6px', fontSize: '0.85rem' }}>Data Analysis</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
