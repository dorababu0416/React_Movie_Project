import { useState } from "react";
import Button from '@mui/material/Button';
import { Updateform } from "./Updateform";

export function Update1({ movies, setmovie }) {
  const [show, setshow] = useState(false);
  const [idx, setidx] = useState(0);
  const [movie1, setmovie1] = useState({});
  return (<div>
    <h2>Click on Movie Name to update data</h2>
    <ul>
      {movies.map((movie, index, movies) => <li style={{ margin: "10px" }} key={index}>
        <Button style={{ width: "200px" }} size="medium" variant="outlined" onClick={() => { setshow(true); setidx(index); setmovie1(movies[index]); }}>{movie.name}</Button>
      </li>
      )}
    </ul>
    {show ? <Updateform movie1={movie1} movies={movies} setmovie={setmovie} idx={idx} setshow={setshow} /> : ""}
  </div>);
}
