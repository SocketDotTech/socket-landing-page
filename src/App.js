import { Header } from "./components/Header";
import { Homepage } from "./pages/Homepage";
import { Teampage } from "./pages/Teampage";
import { Footer } from "./components/Footer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="h-screen overflow-x-hidden">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/team" element={<Teampage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
