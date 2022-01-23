import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export function Addmovie(props) {
  return (<div className="App">
    <TextField required id="outlined-required" size="small" label="Enter Movie name" onChange={event => {
      props.setmoviename(event.target.value);
    }} style={props.styles} value={props.moviename} />
    <TextField required id="outlined-required" size="small" label="Enter Poster url" onChange={event => {
      props.setposter(event.target.value);
    }} style={props.styles} value={props.poster} />
    <TextField required id="outlined-required" size="small" label="Enter Movie rating" onChange={event => {
      props.setrating(event.target.value);
    }} style={props.styles} value={props.rating} />
    <TextField required id="outlined-required" size="small" label="Enter Movie Summary" onChange={event => {
      props.setsummary(event.target.value);
    }} style={props.styles} value={props.summary} />
    <TextField required id="outlined-required" size="small" label="Enter youtube vedio Id" onChange={event => {
      props.settrailer(event.target.value);
    }} style={props.styles} value={props.trailer} />
    <Button variant="contained" onClick={props.click1} style={props.styles}>Add Movie</Button>
  </div>);
}
