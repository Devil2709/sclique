import "./App.css";
import NavBar from "./Components/NavBar";
import Challenges from "./Pages/Challenges";
import Home from "./Pages/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <section className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Challenges />} />
          <Route path="home" element={<Home />} />
          <Route path="learn" element={<Challenges />} />
          <Route path="challenges" element={<Challenges />} />
          <Route path="store" element={<Challenges />} />
        </Routes>
      </BrowserRouter>
    </section>
  );
}

export default App;
