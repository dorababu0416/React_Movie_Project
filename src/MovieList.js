import { Movie } from "./Movie";
import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';

export function MovieList({ movie }) {
  const history=useHistory();
  return (<div>
    <Button style={{margin:"15px", float:"right"}} variant="outlined" onClick={()=>history.push("/displaymovielist/add")}>Add New movies</Button>
    <Button style={{margin:"15px", float:"right"}} variant="outlined" onClick={()=>history.push("/displaymovielist/update")}>Update Movie</Button>
    <Button style={{margin:"15px", float:"right"}} variant="outlined" onClick={()=>history.push("/displaymovielist/delete")}>Delete Movie</Button>
    <section style={{clear:"both"}} className="movie-list">
    {movie.map(({
      name, poster, summary, rating, trailer
    },index) => <Movie key={index} trailer={trailer} rating={rating} name={name} summary={summary} poster={poster} index={index}/>)}
  </section></div>);
}
