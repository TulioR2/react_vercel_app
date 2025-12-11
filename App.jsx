import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Favorites from "./pages/Favorites";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detalhes" element={<Details />} />
        <Route path="/favoritos" element={<Favorites />} />
      </Routes>
    </>
  );
}

export default App;
