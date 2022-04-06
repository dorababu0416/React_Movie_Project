import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import { useParams } from "react-router-dom";
import TextField from '@mui/material/TextField';
import { useEffect, useState } from "react";

export function EditMovie() {
  const { id } = useParams();
  const [movie, setmovie] = useState(null);
  useEffect(() => { fetch(`https://622afbad14ccb950d22b18c9.mockapi.io/movies/${id}`).then(data => data.json().then(mv => setmovie(mv))); }, []);

  return movie ? <Displayfunc movie={movie} id={id} /> : "";
}
function Displayfunc({ movie, id }) {
  const [moviename, setmoviename] = useState("");
  const [poster, setposter] = useState("");
  const [rating, setrating] = useState("");
  const [trailer, settrailer] = useState("");
  const [summary, setsummary] = useState("");
  const history = useHistory();
  return (<div>
    <h2>Updateform</h2>
    <div className="updateform">
      <TextField required id="outlined-required" size="small" label="Movie name" onChange={event => { setmoviename(event.target.value); }} defaultValue={movie.name} key={movie.name} />
      <TextField required id="outlined-required" size="small" label="Poster url" onChange={event => { setposter(event.target.value); }} defaultValue={movie.poster} key={movie.poster} />
      <TextField required id="outlined-required" size="small" label="Movie rating" onChange={event => { setrating(event.target.value); }} defaultValue={movie.rating} key={movie.rating} />
      <TextField required id="outlined-required" size="small" label="Movie Summary" onChange={event => { setsummary(event.target.value); }} defaultValue={movie.summary} key={movie.summary} />
      <TextField required id="outlined-required" size="small" label="youtube vedio Id" onChange={event => { settrailer(event.target.value); }} defaultValue={movie.trailer.split("/").reverse()[0]} key={movie.trailer.split("/").reverse()[0]} />
      <Button variant="contained" onClick={() => {
        const newmovie = {
          name: moviename === "" ? movie.name : moviename,
          trailer: trailer === "" ? `https://www.youtube.com/embed/${movie.trailer.split("/").reverse()[0]}` : `https://www.youtube.com/embed/${trailer}`,
          rating: rating === "" ? movie.rating : rating,
          poster: poster === "" ? movie.poster : poster,
          summary: summary === "" ? movie.summary : summary
        };
        fetch(`https://622afbad14ccb950d22b18c9.mockapi.io/movies/${id}`, { method: "PUT", body: JSON.stringify(newmovie), headers: { "Content-type": "application/json" } }).then(() => history.push("/displaymovielist"));
      }}>Update Movie</Button>
    </div>

  </div>);
}
