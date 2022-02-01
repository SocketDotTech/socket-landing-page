import { Header } from "./components/Header";
import { Homepage } from "./pages/Homepage";

function App() {
  return (
    <div className="h-screen bg-oc-dark overflow-x-hidden">
      <Header />
      <Homepage />
    </div>
  );
}

export default App;
