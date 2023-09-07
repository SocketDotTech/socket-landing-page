import { Header } from "./components/Header";
import { Homepage } from "./pages/Homepage";
import { Teampage } from "./pages/Teampage";
import { Footer } from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import ReactGA from "react-ga4";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    ReactGA.initialize(process.env.REACT_APP_GA_ID);
    ReactGA.send("pageview");
  }, []);
  return (
    <>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/team" element={<Teampage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
