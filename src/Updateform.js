import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

// Function to display the update form
export function Updateform({ movie, movies, idx, setshow, getData}) {
  const [moviename, setmoviename] = useState("");
  const [poster, setposter] = useState("");
  const [rating, setrating] = useState("");
  const [trailer, settrailer] = useState("");
  const [summary, setsummary] = useState("");
  return (<div>
    <h2>Updateform</h2>
    <div className="updateform">
      <TextField required id="outlined-required" size="small" label="Movie name" onChange={event => { setmoviename(event.target.value); }} defaultValue={movie.name} key={movie.name} />
      <TextField required id="outlined-required" size="small" label="Poster url" onChange={event => { setposter(event.target.value); }} defaultValue={movie.poster} key={movie.poster} />
      <TextField required id="outlined-required" size="small" label="Movie rating" onChange={event => { setrating(event.target.value); }} defaultValue={movie.rating} key={movie.rating} />
      <TextField required id="outlined-required" size="small" label="Movie Summary" onChange={event => { setsummary(event.target.value); }} defaultValue={movie.summary} key={movie.summary} />
      <TextField required id="outlined-required" size="small" label="youtube vedio Id" onChange={event => { settrailer(event.target.value); }} defaultValue={movie.trailer.split("/").reverse()[0]} key={movie.trailer.split("/").reverse()[0]} />
      <Button variant="contained" onClick={() => {   const newmovie={
  name: moviename === "" ? movie.name : moviename,
  trailer: trailer === "" ? `https://www.youtube.com/embed/${movie.trailer.split("/").reverse()[0]}` : `https://www.youtube.com/embed/${trailer}`,
  rating: rating === "" ? movie.rating : rating,
  poster: poster === "" ? movie.poster : poster,
  summary: summary === "" ? movie.summary : summary
};
fetch(`https://622afbad14ccb950d22b18c9.mockapi.io/movies/${movies[+idx].id}`, {method: "PUT", body:JSON.stringify(newmovie), headers: {"Content-type" : "application/json"}}).then(()=>{setshow(false); getData();})}}>Update Movie</Button>
    </div>

  </div>);
}
