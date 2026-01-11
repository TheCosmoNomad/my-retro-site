import Marquee from './components/Marquee';
import Sidebar from './components/Sidebar';
import Construction from './components/Construction';
// import HitCounter from './components/HitCounter';

function App() {
  return (
    <div style={{ maxWidth: '960px', margin: '0 auto', padding: '10px' }}>
      
      {/* Header Section */}
      <header style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h1 style={{ 
          fontSize: '4rem', 
          margin: '10px 0', 
          color: '#FF00FF', 
          textShadow: '3px 3px #00FFFF',
          fontFamily: '"Comic Sans MS", "Chalkboard SE", sans-serif'
        }}>
          ~*~ Welcome to Anubhav's Realm ~*~
        </h1>
        <Marquee text="+++ WELCOME TO MY HOME PAGE +++ DON'T FORGET TO SIGN THE GUESTBOOK +++ BEST VIEWED WITH NETSCAPE NAVIGATOR 4.0 +++" />
      </header>

      {/* Main Layout */}
      <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
        
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content Area */}
        <main className="retro-box" style={{ flex: 1, backgroundColor: '#c0c0c0', minHeight: '600px' }}>
          
          <div className="retro-inset" style={{ background: 'white', marginBottom: '20px' }}>
            <h2 style={{ marginTop: 0, color: 'blue', borderBottom: '1px solid blue' }}>News & Updates</h2>
            <p><strong>Jan 12, 2026:</strong> Finally updated my links page! Added more GIFs.</p>
            <p><strong>Jan 01, 2026:</strong> Happy New Year!!! 2026 is going to be the year of Linux on the Desktop!</p>
          </div>

          <Construction />

          <div style={{ textAlign: 'center', margin: '20px 0' }}>
            <h3 style={{ color: 'red' }}>My Interests</h3>
            <p>I love coding, pizza, and watching sci-fi movies.</p>
            
            <table border={1} cellPadding={5} style={{ width: '100%', borderColor: 'gray', background: 'white' }}>
              <thead>
                <tr style={{ background: 'navy', color: 'white' }}>
                  <th>Favorite Thing</th>
                  <th>Why</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>HTML</td>
                  <td>It's easy!</td>
                </tr>
                <tr>
                  <td>Video Games</td>
                  <td>Fun!</td>
                </tr>
                <tr>
                  <td>Music</td>
                  <td>Loud!</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <p>You are visitor number:</p>
            {/* <HitCounter /> */}
          </div>

        </main>
      </div>

      {/* Footer */}
      <footer style={{ textAlign: 'center', marginTop: '20px', color: 'yellow', fontSize: '0.8rem' }}>
        <p>&copy; 1999-2026 Anubhav. All rights reserved.</p>
        <p>
          <a href="#">Email Me</a> | <a href="#">Webring</a> | <a href="#">Top 100</a>
        </p>
      </footer>

    </div>
  );
}

export default App;
