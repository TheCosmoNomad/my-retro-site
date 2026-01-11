import { useState } from 'react';

const HitCounter = () => {
  const [hits] = useState(() => {
    // Initialize from localStorage and increment
    const stored = localStorage.getItem('retro_hits');
    const newHits = stored ? parseInt(stored, 10) + 1 : 1337;
    localStorage.setItem('retro_hits', newHits.toString());
    return newHits;
  });

  return (
    <div className="retro-inset" style={{ display: 'inline-block', backgroundColor: 'black', color: 'red', fontFamily: 'Courier New, monospace', fontWeight: 'bold', letterSpacing: '2px', padding: '5px 10px' }}>
      {hits.toString().padStart(6, '0')}
    </div>
  );
};

export default HitCounter;
