import React from 'react';

const Navbar = () => {
  return (
    <nav className="glass" style={{
      position: 'fixed',
      top: '20px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '90%',
      maxWidth: '800px',
      padding: '16px 32px',
      borderRadius: '999px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      zIndex: 100
    }}>
      <div style={{ fontWeight: 800, fontSize: '1.2rem', letterSpacing: '1px' }}>
        AFP<span className="text-gradient">.</span>
      </div>
      <div style={{ display: 'flex', gap: '30px', fontWeight: 500, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
        <a href="#about" onMouseOver={e => e.target.style.color='white'} onMouseOut={e => e.target.style.color='var(--text-secondary)'}>About</a>
        <a href="#skills" onMouseOver={e => e.target.style.color='white'} onMouseOut={e => e.target.style.color='var(--text-secondary)'}>Skills</a>
        <a href="#portfolio" onMouseOver={e => e.target.style.color='white'} onMouseOut={e => e.target.style.color='var(--text-secondary)'}>Portfolio</a>
      </div>
    </nav>
  );
};

export default Navbar;
