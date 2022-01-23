import "./App.css";
import { useState } from "react";
import { Routing } from "./Routing";
import { Initial_value } from "./Initial_value";


export default function App() {
  const styles = { margin: "0px 5px 10px 0px" };
  const [moviename, setmoviename] = useState("");
  const [poster, setposter] = useState("");
  const [rating, setrating] = useState("");
  const [summary, setsummary] = useState("");
  const [trailer, settrailer] = useState("");
  const [movie, setmovie] = useState(Initial_value);
  const resetvalues = () => { setmoviename(""); setposter(""); setrating(""); setsummary(""); settrailer("")};
  const click1 = () => { setmovie([...movie, { name: moviename, poster: poster, rating: rating, summary: summary, trailer: `https://www.youtube.com/embed/${trailer}` }]); resetvalues() };
  return (
    <Routing styles={styles} trailer={trailer} settrailer={settrailer} moviename={moviename} setmoviename={setmoviename} poster={poster} setposter={setposter} rating={rating} setrating={setrating} summary={summary} setsummary={setsummary} movie={movie} setmovie={setmovie} click1={click1}></Routing>
    );
}


