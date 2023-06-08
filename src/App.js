import "./App.css";
import Challenges from "./Pages/Challenges";
import { CssVarsProvider } from "@mui/joy/styles";

<CssVarsProvider defaultMode="dark  "></CssVarsProvider>;

function App() {
  return (
    <div className="App" width="100%">
      <Challenges />
    </div>
  );
}

export default App;
