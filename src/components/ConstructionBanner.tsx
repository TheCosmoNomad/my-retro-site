const ConstructionBanner = () => {
  return (
    <div style={{ 
      width: '100%', 
      height: '40px', 
      background: 'repeating-linear-gradient(45deg, #FFFF00, #FFFF00 20px, #000000 20px, #000000 40px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '2px solid white',
      margin: '20px 0'
    }}>
      <div style={{ background: 'black', padding: '0 10px', color: 'yellow', fontWeight: 'bold', border: '1px solid yellow' }}>
        UNDER CONSTRUCTION
      </div>
    </div>
  );
};

export default ConstructionBanner;
