import { useState } from "react";
import Button from '@mui/material/Button';
import { Updateform } from "./Updateform";
import { useEffect } from "react";


// Function to display the list of movies which onclick will display the movie data in a form
export function Update1() {
  const [movies, setmovies]= useState([]);
  const getData=()=> fetch("https://622afbad14ccb950d22b18c9.mockapi.io/movies").then(data=>data.json()).then(mvs=>setmovies(mvs));
  useEffect(getData, []);
  const [show, setshow] = useState(false);
  const [idx, setidx] = useState(0);
  const [movie1, setmovie1] = useState({});
  return (<div style={{paddingLeft: "20px"}}>
    <h2 style={{color:"red"}}>Click on Movie Name to update data</h2>
    <ul style={{listStyleType:"square"}}>
      {movies.map((movie, index, movies) => <li style={{ margin: "10px" }} key={index}>
        <Button style={{ width: "200px" }} color="secondary" size="medium" variant="outlined" onClick={() => { setshow(true); setidx(index); setmovie1(movies[index]); }}>{movie.name}</Button>
      </li>
      )}
    </ul>
    {show ? <Updateform movie={movie1} movies={movies} idx={idx} setshow={setshow} getData={getData} /> : ""}
  </div>);
}
