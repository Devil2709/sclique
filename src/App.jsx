import "./App.css";
import { Helmet } from "react-helmet";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Challenges from "./Pages/Challenges";
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";
import Learn from "./Pages/Learn";
import LogIn from "./Pages/LogIn";

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
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<LogIn />} />
          <Route
            path="learn"
            element={
              <div>
                <NavBar />
                <section className="header" style={{ height: "80px" }} />
                <Learn />
              </div>
            }
          />
          <Route
            path="challenges"
            element={
              <div>
                <NavBar />
                <section className="header" style={{ height: "80px" }} />
                <Challenges />
              </div>
            }
          />
          <Route
            path="store"
            element={
              <div>
                <NavBar />
                <section className="header" style={{ height: "80px" }} />
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
