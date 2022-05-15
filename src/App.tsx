
import { useContext } from "react";
import { themeContext } from "./Context";
import { Footer } from "./Footer";
import './index.css'
import { NavBar } from "./NavBar";
import Section1 from "./page/Section1";
import { Section2 } from "./page/Section2";
import Section3 from "./page/Section3";


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
      <NavBar />
      <Section1/>
      <Section2 />
      <Section3 />
      <Footer/>
    </div>
  );
}

export default App
