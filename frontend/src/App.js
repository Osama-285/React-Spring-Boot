import logo from "./logo.svg";
import "./App.css";
import { ThemeProvider } from "@emotion/react";
import { darkTheme } from "./Themes/DarkTheme";
import { CssBaseline } from "@mui/material";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
      </ThemeProvider>
    </div>
  );
}

export default App;
