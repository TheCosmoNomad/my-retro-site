interface MarqueeProps {
  text: string;
}

const Marquee = ({ text }: MarqueeProps) => {
  return (
    <div style={{ overflow: 'hidden', whiteSpace: 'nowrap', background: '#000080', color: 'white', border: '2px solid white', padding: '5px' }}>
      <div style={{ display: 'inline-block', paddingLeft: '100%', animation: 'marquee 15s linear infinite' }}>
        <span style={{ fontSize: '1.2rem', fontWeight: 'bold', fontFamily: 'Courier New' }}>{text}</span>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translate(0, 0); }
          100% { transform: translate(-100%, 0); }
        }
      `}</style>
    </div>
  );
};

export default Marquee;
