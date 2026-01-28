import ConstructionBanner from './components/ConstructionBanner';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';
import Log from './components/Log';
import Sidebar from './components/Sidebar';
// import VisitorCounter from './components/VisitorCounter';

function App() {
  return (
    <div style={{ maxWidth: '960px', margin: '0 auto', padding: '10px' }}>
      <Header />

      <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
        <Sidebar />

        <main className="retro-box" style={{ flex: 1, backgroundColor: '#c0c0c0', minHeight: '600px' }}>
          
          <Log />

          <ConstructionBanner />

          <Content />

          {/* <VisitorCounter /> */}

        </main>
      </div>

      <Footer />
    </div>
  );
}

export default App;
