import "./App.css";
import { useState } from "react";
import { Routing } from "./Routing";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

export default function App() {
  const [mode, setmode]=useState("dark");
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });
  
  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={3} style={{borderRadius:"0px", minHeight:"100vh"}}>
    <Routing mode={mode} setmode={setmode}></Routing>
      </Paper>
    </ThemeProvider>
    );
}


 // const click1 = () => { setmovie([...movie, { name: moviename, poster: poster, rating: rating, summary: summary, trailer: `https://www.youtube.com/embed/${trailer}` }]); resetvalues(); history.push("/displaymovielist")};