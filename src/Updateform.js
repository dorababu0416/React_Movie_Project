import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export function Updateform({ movie1, movies, setmovie, idx, setshow }) {
  const [moviename1, setmoviename1] = useState("");
  const [poster1, setposter1] = useState("");
  const [rating1, setrating1] = useState("");
  const [trailer1, settrailer1] = useState("");
  const [summary1, setsummary1] = useState("");
  return (<div>
    <h2 onClick={() => console.log(movie1)}>Updateform</h2>
    <div className="updateform">
      <TextField required id="outlined-required" size="small" label="Movie name" onChange={event => { setmoviename1(event.target.value); }} defaultValue={movie1.name} key={movie1.name} />
      <TextField required id="outlined-required" size="small" label="Poster url" onChange={event => { setposter1(event.target.value); }} defaultValue={movie1.poster} key={movie1.poster} />
      <TextField required id="outlined-required" size="small" label="Movie rating" onChange={event => { setrating1(event.target.value); }} defaultValue={movie1.rating} key={movie1.rating} />
      <TextField required id="outlined-required" size="small" label="Movie Summary" onChange={event => { setsummary1(event.target.value); }} defaultValue={movie1.summary} key={movie1.summary} />
      <TextField required id="outlined-required" size="small" label="youtube vedio Id" onChange={event => { settrailer1(event.target.value); }} defaultValue={movie1.trailer.split("/").reverse()[0]} key={movie1.trailer.split("/").reverse()[0]} />
      <Button variant="contained" onClick={() => { setmovie([...movies.slice(0, idx), { name: moviename1 === "" ? movie1.name : moviename1, trailer: trailer1 === "" ? `https://www.youtube.com/embed/${movie1.trailer.split("/").reverse()[0]}` : `https://www.youtube.com/embed/${trailer1}`, rating: rating1 === "" ? movie1.rating : rating1, poster: poster1 === "" ? movie1.poster : poster1, summary: summary1 === "" ? movie1.summary : summary1 }, ...movies.slice(idx + 1)]); setshow(false); }}>Update Movie</Button>
    </div>

  </div>);
}
