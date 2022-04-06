import { Movie } from "./Movie";
import { useHistory } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { useState, useEffect } from "react";

// Function to display the movie list
export function MovieList() {
  const history=useHistory();
  const [movies,setmovies]=useState([]);

  const getData=()=>{async function getmoviedata(){
    const data= await fetch("https://622afbad14ccb950d22b18c9.mockapi.io/movies", {method: "GET",});
  const moviedata= await data.json();
  setmovies(moviedata);
  };
  getmoviedata();}
  useEffect(getData,[]);
  return(<div>
    <section className="movie-list">
      {/* For every movie the 'Movie' component is called with the data of a particular movie */}
    {movies.map(({
      name, poster, summary, rating, trailer, id
    },index, movies) => <Movie key={index} trailer={trailer} rating={rating} name={name} summary={summary} poster={poster} index={index} id={id}
    editbutton={<IconButton aria-label="edit" title="edit" onClick={()=>history.push(`/displaymovielist/edit/${id}`)} color="secondary" size="small">
    <EditIcon fontSize="inherit" />
  </IconButton>}
    deletebutton={<IconButton aria-label="delete" onClick={()=>{fetch(`https://622afbad14ccb950d22b18c9.mockapi.io/movies/${movies[index].id}`, {method: "Delete",}).then(()=>{getData();})}} title="delete" color="error" size="small">
    <DeleteIcon fontSize="inherit" />
  </IconButton>}
     />)}
  </section></div>);
}
