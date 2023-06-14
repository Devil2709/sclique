import "./App.css";
import NavBar from "./Components/NavBar";
import Challenges from "./Pages/Challenges";
import Home from "./Pages/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Learn from "./Pages/Learn";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="App">
      <Helmet>
        <style>{"body { background-color: black; }"}</style>
      </Helmet>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <NavBar />
                <Challenges />
              </div>
            }
          />
          <Route path="home" element={<Home />} />
          <Route
            path="learn"
            element={
              <div>
                <NavBar />
                <Learn />
              </div>
            }
          />
          <Route
            path="challenges"
            element={
              <div>
                <NavBar />
                <Challenges />
              </div>
            }
          />
          <Route
            path="store"
            element={
              <div>
                <NavBar />
                <Challenges />
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
