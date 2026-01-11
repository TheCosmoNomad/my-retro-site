import reactLogo from '../assets/react.svg'

const Sidebar = () => {
  return (
    <div className="retro-box" style={{ width: '200px', height: '100%', minHeight: '400px', marginRight: '20px' }}>
      <div style={{ textAlign: 'center', marginBottom: '15px' }}>
        <img src="https://ui-avatars.com/api/?name=Web+Master&background=random&color=fff&rounded=true" alt="Me" style={{ border: '2px inset white' }} />
        <p style={{ margin: '5px 0', fontSize: '0.8rem' }}>Webmaster</p>
      </div>
      
      <ul style={{ listStyleType: 'square', paddingLeft: '20px' }}>
        <li style={{ marginBottom: '10px' }}><a href="#">Home</a></li>
        <li style={{ marginBottom: '10px' }}><a href="#">My Bio</a></li>
        <li style={{ marginBottom: '10px' }}><a href="#">Cool Links</a></li>
        <li style={{ marginBottom: '10px' }}><a href="#">Guestbook</a></li>
        <li style={{ marginBottom: '10px' }}><a href="mailto:fake@example.com">Email Me!</a></li>
      </ul>

      <div style={{ marginTop: '30px', textAlign: 'center' }}>
        <div style={{ border: '1px solid gray', padding: '5px', background: 'white', marginBottom: '10px' }}>
            <a href="https://react.dev" target="_blank" style={{ display: 'block', fontSize: '0.7rem', textDecoration: 'none', color: 'black' }}>
                <img src={reactLogo} width="30" />
                <br/>
                Powered by React
            </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
