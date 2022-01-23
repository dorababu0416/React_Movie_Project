import { MovieList } from "./MovieList";
import { Switch, Route, Redirect } from "react-router-dom";
import { Addmovie } from "./Addmovie";
import { Home } from "./Home";
import { NotFound } from "./NotFound";
import { useHistory } from "react-router-dom";
import { MovieDetails } from "./MovieDetails";
import { Delete1 } from "./Delete1";
import { Update1 } from "./Update1";

export function Routing(props) {
  const history=useHistory();
  return (<div>
    <div className="linkbuttons" style={{display:"flex", flexDirection:"column"}}>
    <button onClick={()=>history.push("/")}>Home</button>
    <button onClick={()=>history.push("/displaymovielist")}>Display movies</button>
    <button onClick={()=>history.push("/addmovie")}>Add Movie</button>
    </div>

    <hr />

    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/displaymovielist/add">
      <Addmovie styles={props.styles} trailer={props.trailer} settrailer={props.settrailer} moviename={props.moviename} setmoviename={props.setmoviename} poster={props.poster} setposter={props.setposter} rating={props.rating} setrating={props.setrating} summary={props.summary} setsummary={props.setsummary} movie={props.movie} click1={props.click1} />
      </Route>
      <Route path="/displaymovielist/update">
        <Update1 movies={props.movie} setmovie={props.setmovie} />
      </Route>
      <Route path="/displaymovielist/delete">
        <Delete1 movies={props.movie} setmovie={props.setmovie}/>
      </Route>
      <Route path="/movielist">
        <Redirect to="/displaymovielist"></Redirect>
      </Route>
      <Route path="/displaymovielist/:id">
        <MovieDetails movies={props.movie} />
      </Route>
      <Route path="/displaymovielist">
        <MovieList movie={props.movie}></MovieList>
      </Route>
      <Route path="/addmovie">
        <Addmovie styles={props.styles} trailer={props.trailer} settrailer={props.settrailer} moviename={props.moviename} setmoviename={props.setmoviename} poster={props.poster} setposter={props.setposter} rating={props.rating} setrating={props.setrating} summary={props.summary} setsummary={props.setsummary} movie={props.movie} click1={props.click1} />
      </Route>
      <Route path="**">
        <NotFound />
      </Route>
    </Switch>
  </div>);
}


