import "./App.css";
import { ThemeProvider } from "@emotion/react";
import { darkTheme } from "./Themes/DarkTheme";
import { CssBaseline } from "@mui/material";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Navbar></Navbar>
        <Home />
      </ThemeProvider>
    </div>
  );
}

export default App;
