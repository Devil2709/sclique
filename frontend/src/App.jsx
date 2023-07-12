import "./App.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Challenges from "./Pages/Challenges";
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";
import Learn from "./Pages/Learn";
import LogIn from "./Pages/LogIn";
import Store from "./Pages/Store";
import Discussion from "./Pages/Discussion";

function App() {
  return (
    <div className="App">
      <HelmetProvider>
        <Helmet>
          <style>{"body { background-color: black; }"}</style>
        </Helmet>
      </HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Home />
              </div>
            }
          />
          <Route
            path="home"
            element={
              <div>
                <NavBar />
                <section className="header" style={{ height: "80px" }} />
                <Home />
              </div>
            }
          />
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
                <Store />
              </div>
            }
          />
          <Route
            path="discuss/:id"
            element={
              <div>
                <NavBar />
                <section className="header" style={{ height: "80px" }} />
                <Discussion />
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
