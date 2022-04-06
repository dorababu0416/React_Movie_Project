import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useHistory } from "react-router-dom";

// To add new movie to the existing movies data
export function Addmovie() {
  const styles = { margin: "0px 5px 10px 16px" };
  const [moviename, setmoviename] = useState("");
  const [poster, setposter] = useState("");
  const [rating, setrating] = useState("");
  const [summary, setsummary] = useState("");
  const [trailer, settrailer] = useState("");
  const history=useHistory();

  const click1 = () => { 
    const newmovie={ name: moviename,
       poster: poster,
       rating: rating,
       summary: summary, 
       trailer: `https://www.youtube.com/embed/${trailer}`
      };
      fetch("https://622afbad14ccb950d22b18c9.mockapi.io/movies", {method:"POST", body:JSON.stringify(newmovie), headers: {"Content-type" : "application/json"}}).then(()=>history.push("/displaymovielist"));
      };
  return (
  <div className="App">
    <div><TextField required id="outlined-required" color="secondary" size="small" label="Enter Movie name" onChange={event => {
      setmoviename(event.target.value);
    }} style={styles} value={moviename} />
    <TextField required id="outlined-required" size="small" color="secondary" label="Enter Poster url" onChange={event => {
      setposter(event.target.value);
    }} style={styles} value={poster} />
    <TextField required id="outlined-required" size="small" color="secondary" label="Enter Movie rating" onChange={event => {
      setrating(event.target.value);
    }} style={styles} value={rating} />
    <TextField required id="outlined-required" size="small" color="secondary" label="Enter Movie Summary" onChange={event => {
      setsummary(event.target.value);
    }} style={styles} value={summary} />
    <TextField required id="outlined-required" size="small" color="secondary" label="Enter youtube vedio Id" onChange={event => {
      settrailer(event.target.value);
    }} style={styles} value={trailer} />
    <Button variant="contained" onClick={click1} style={styles}>Add Movie</Button></div>
  </div>);
}
