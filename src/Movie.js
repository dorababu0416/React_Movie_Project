import { Counter } from "./Counter";
import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import { useHistory } from "react-router-dom";
import ModalVideo from 'react-modal-video'
import "react-modal-video/scss/modal-video.scss"
import YouTubeIcon from '@mui/icons-material/YouTube';

//Function to display the details of a movie

export function Movie({ poster, name, rating, trailer, summary, index, id, editbutton, deletebutton }) {
  const [show, setshow]=useState(true);
  const history1=useHistory();
  const [isOpen, setOpen] = useState(false);
  return (<Card className="movie-container">
    <CardMedia title="click for movie info">
      {/* Movie poster component with onclick to route to different page to view the trailer of the movie */}
    <img className="movie-poster" onClick={()=>history1.push(`/displaymovielist/${id}`)} src={poster} alt={name} />
    </CardMedia>
    <CardContent>
    <div className="movie-specs">
      {/* To display the name of a movie */}
      <h3 className="movie-name">{name} 
      {/* Functionality to hide/show description */}
      <IconButton aria-label="delete" color="primary" onClick={()=>setshow(!show)}>
        {show ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
      </IconButton>
      {/* Functionality to display the modal trailer of a movie */}
      <ModalVideo channel='youtube' youtube={{autoplay: 1, mute: 1}} isOpen={isOpen} videoId={trailer.split("/").reverse()[0]} onClose={() => setOpen(false)} />
      <IconButton aria-label="click to watch trailer of movie" color="primary" onClick={()=> setOpen(true)} title="Watch Trailer">
        <YouTubeIcon color="error" />
      </IconButton>

      {/* Components to display a edit/delete options for a movie */}
      {editbutton}
    {deletebutton}
      </h3>
      {/* To show the rating of a movie */}
      <p className="movie-rating">⭐ {rating} </p>
    </div>
    {/* To show the description of a movie */}
    {show ? <p className="movie-summary">{summary}</p> : ""}
    </CardContent>
    <CardActions>
      {/* Component to include the Like & dislike buttons */}
    <Counter />
    </CardActions>
  </Card>);
}


// export function Movie({ poster, name, rating, summary }) {
//   const [show, setshow]=useState(true);
//   // conditional styling
//   // const styles={display: show?"block":"none"};
//   return (<div className="movie-container">
//     <img className="movie-poster" src={poster} alt={name} />
//     <div className="movie-specs">
//       <h3 className="movie-name">{name}</h3>
//       <p className="movie-rating">⭐ {rating} </p>
//     </div>
//     <Button variant="outlined" size="small" style={{marginBottom:"10px"}} onClick={()=>setshow(!show)}>{show?"Hide":"Show"} description</Button>    
//     {/* conditional rendering */}
//     {show ? <p className="movie-summary">{summary}</p> : ""}
//     <Counter />
//   </div>);
// }