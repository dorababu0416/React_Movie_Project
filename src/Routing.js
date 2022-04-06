import { MovieList } from "./MovieList";
import { Switch, Route, Redirect } from "react-router-dom";
import { Addmovie } from "./Addmovie";
import { Home } from "./Home";
import { NotFound } from "./NotFound";
import { useHistory } from "react-router-dom";
import { MovieDetails } from "./MovieDetails";
import { Delete1 } from "./Delete1";
import { Update1 } from "./Update1";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { EditMovie } from "./EditMovie";

export function Routing(props) {
  const history=useHistory();
  const styles={margin:"0px" , color:"red", padding:"16px 24px"};
  return (<div>
    {/* App Heading */}
    <h2 style={styles}>MOVIE APP</h2>
    {/* Navigation Bar */}
    <AppBar sx={{marginBottom:"20px"}} position="sticky">
        <Toolbar>
          {/* Button to change the url to Home page */}
          <Button sx={{border:"1px outset #1976d2", margin:"0px 10px"}} color="inherit" onClick={()=>history.push("/")}>Home</Button>
          {/* Button to change the url to movielist page -- displays the list of movies */}
          <Button sx={{border:"1px outset #1976d2", margin:"0px 10px"}} color="inherit" onClick={()=>history.push("/displaymovielist")}>Display movies</Button>
          {/* Button to change the url to add movie page */}
          <Button sx={{border:"1px outset #1976d2", margin:"0px 10px"}} color="inherit" onClick={()=>history.push("/addmovie")}>Add Movie</Button>
          {/* Button to change the url to Update movies page  */}
          <Button sx={{border:"1px outset #1976d2", margin:"0px 10px"}} color="inherit" onClick={()=>history.push("/displaymovielist/update")}>Update Movies</Button>
          {/* Button to change the Url to delete movies page */}
          <Button sx={{border:"1px outset #1976d2", margin:"0px 10px"}} color="inherit" onClick={()=>history.push("/displaymovielist/delete")}>Delete Movies</Button>
          {/* Icon Button to change the theme dark/light of the entire page */}
          <IconButton title="Click to toggle" onClick={()=>props.setmode(props.mode==="light" ? "dark":"light")} aria-label="delete" sx={{marginLeft:"auto"}}>
        {props.mode==="dark" ? <LightModeIcon /> : <DarkModeIcon /> }
      </IconButton>
        </Toolbar>
      </AppBar>

    <Switch>
      {/* Displays the Home page on match */}
      <Route exact path="/">
        <Home />
      </Route>
      {/* Displays the update page on match */}
      <Route exact path="/displaymovielist/update">
        <Update1 />
      </Route>
      {/* Displays the delete page on match */}
      <Route exact path="/displaymovielist/delete">
        <Delete1 />
      </Route>
      {/* Displays the edit page when edit button is clicked */}
      <Route exact path="/displaymovielist/edit/:id">
      <EditMovie />
      </Route>
      {/* Redirects to the display movie list path */}
      <Route exact path="/movielist">
        <Redirect to="/displaymovielist"></Redirect>
      </Route>
      {/* Displays the movie details(trailer, details) when a movie poster is clicked */}
      <Route exact path="/displaymovielist/:id">
        <MovieDetails />
      </Route>
      {/* Displays the movie list on match */}
      <Route exact path="/displaymovielist">
        <MovieList />
      </Route>
      {/* Displays the add movie page on match */}
      <Route exact path="/addmovie">
        <Addmovie />
      </Route>
      {/* Universal match loads the NotFound page */}
      <Route path="**">
        <NotFound />
      </Route>
    </Switch>
  </div>);
}

