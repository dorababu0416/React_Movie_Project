import { useParams } from "react-router-dom";
import { NotFound } from "./NotFound"
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";

// Function to view trailer & details of a particular movie on clicking the poster.
export function MovieDetails() {
  // useparams is the hook used to get the variable id from the URL
  const { id } = useParams();
  const [movie, setmovie]=useState({});
  useEffect(()=>{
    fetch(`https://622afbad14ccb950d22b18c9.mockapi.io/movies/${id}`, {method:"GET",}).then(data=>data.json()).then(mv=>setmovie(mv))
  },[]);
  const history=useHistory();
  return (<div style={{padding:"16px"}}>
    {movie!==undefined ? <div>
    <div>
      {/* Component to display the Youtube trailer */}
    <iframe width="100%" height="600" src={movie.trailer} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
    <div className="movie-detail-container">
      <div className="movie-specs">
        {/* To display movie name */}
        <h3 className="movie-name">{movie.name}</h3>
        {/* To display movie rating */}
        <p className="movie-rating">⭐ {movie.rating} </p>
      </div>
      {/* To display movie summary */}
      <p className="movie-summary">{movie.summary}</p>
    </div>
    {/* If the movie is undefined the 'NotFound' component will be loaded to indicate the id is not proper */}
  </div> : <NotFound /> 
  }

  {/* Back button to go back to previous page */}
  <Button variant="contained" onClick={()=>history.goBack()} startIcon={<ArrowBackIcon />}>
        Back
      </Button>
  </div>);
}
