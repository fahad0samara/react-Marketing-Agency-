
import { useContext } from "react";
import { themeContext } from "./Context";
import './index.css'
import { NavBar } from "./NavBar";


function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
      <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <NavBar/>
    </div>
  );
}

export default App
