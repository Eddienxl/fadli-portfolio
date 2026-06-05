import React from 'react';

const Hero = () => {
  return (
    <section className="section-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', paddingTop: '150px' }}>
      
      {/* Profile Picture */}
      <div style={{ marginBottom: '30px' }}>
        <div style={{ 
          width: '150px', 
          height: '150px', 
          borderRadius: '50%', 
          padding: '4px',
          background: 'linear-gradient(to bottom right, #3b82f6, #1e3a8a)',
          boxShadow: '0 0 30px rgba(59, 130, 246, 0.3)'
        }}>
          <img 
            src="/images/profile.jpg" 
            alt="Ahmad Fadli Pratama" 
            style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} 
          />
        </div>
      </div>

      <div className="glass-pill" style={{ marginBottom: '25px', letterSpacing: '1px', fontSize: '0.75rem', fontWeight: 700 }}>
        AI ENGINEER & FULL-STACK DEVELOPER
      </div>
      
      <h2 style={{ fontSize: '2.5rem', fontWeight: 800, letterSpacing: '-1px', marginBottom: '10px', color: '#ffffff', fontFamily: 'Sora, sans-serif' }}>
        HAI! I'M
      </h2>
      
      <h1 style={{ 
        fontSize: '4.5rem', 
        fontWeight: 900, 
        letterSpacing: '-2px', 
        lineHeight: 1.1,
        marginBottom: '20px',
        background: 'linear-gradient(to right, #00f2fe, #4facfe)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontFamily: 'Sora, sans-serif',
        textTransform: 'uppercase'
      }}>
        AHMAD FADLI PRATAMA
      </h1>
      
      <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 40px', lineHeight: 1.6 }}>
        A Computer Science student at UIN Suska Riau (Semester 6), offering a unique blend of AI expertise and modern full-stack web development. I specialize in building intelligent data-driven systems and scalable enterprise-grade web applications.
      </p>
      
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
        <button className="btn-primary" onClick={() => document.getElementById('portfolio').scrollIntoView()}>Explore My Work</button>
        <button className="btn-secondary" onClick={() => document.getElementById('contact').scrollIntoView()}>Contact Me</button>
      </div>
    </section>
  );
};

export default Hero;
