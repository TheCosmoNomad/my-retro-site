import Marquee from './Marquee';

function Header() {
  return (
    <header style={{ textAlign: 'center', marginBottom: '20px' }}>
      <h1 style={{ 
        fontSize: '4rem', 
        margin: '10px 0', 
        color: '#FF00FF', 
        textShadow: '3px 3px #00FFFF',
        fontFamily: '"Comic Sans MS", "Chalkboard SE", sans-serif'
      }}>
        ~*~ Welcome to TheCosmoNomad's Realm ~*~
      </h1>
      <Marquee text="+++ WELCOME TO MY HOME PAGE +++ DON'T FORGET TO SIGN THE GUESTBOOK +++ BEST VIEWED WITH NETSCAPE NAVIGATOR 4.0 +++" />
    </header>
  );
}

export default Header;
