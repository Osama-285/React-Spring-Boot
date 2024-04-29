import logo from "./logo.svg";
import "./App.css";
import { ThemeProvider } from "@emotion/react";
import { darkTheme } from "./Themes/DarkTheme";
import { CssBaseline } from "@mui/material";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <Navbar></Navbar>
        <CssBaseline />
      </ThemeProvider>
    </div>
  );
}

export default App;
