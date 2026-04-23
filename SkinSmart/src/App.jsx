import { useState } from 'react';
import Nav from './components/Nav';
import HomePage from './components/HomePage';
import ShopPage from './components/ShopPage';
import InfluencerPage from './components/InfluencerPage';
import AnalysisPage from './components/AnalysisPage';
import ProfilePage from './components/ProfilePage';
import { globalStyle, COLORS } from "./data/constants";

function App() {
  const [page, setPage] = useState("Home");
  const [skinType, setSkinType] = useState(null);

  const pages = {
    Home: <HomePage skinType={skinType} setSkinType={setSkinType} setPage={setPage} />,
    Shop: <ShopPage skinType={skinType} />,
    Influencers: <InfluencerPage skinType={skinType} />,
    Analysis: <AnalysisPage setSkinType={setSkinType} setPage={setPage} />,
    Profile: <ProfilePage skinType={skinType} setSkinType={setSkinType} setPage={setPage} />,
  };

  return (
    <>
      <style>{globalStyle}</style>
      <div style={{ minHeight: "100vh", background: "#FAF8F5" }}>
        <Nav page={page} setPage={setPage} skinType={skinType} />
        {pages[page] || pages.Home}
        <footer style={{ background: "#2C1A14", color: "#C4A28E", textAlign: "center", padding: "2rem 1.5rem", marginTop: "4rem" }}>
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, color: "#FFFFFF", marginBottom: 8 }}>Lumière Skin</div>
          <p style={{ fontSize: 13, lineHeight: 1.7 }}>Your personalized skincare journey starts here.<br />Discover · Learn · Glow.</p>
        </footer>
      </div>
    </>
  );
}

export default App;