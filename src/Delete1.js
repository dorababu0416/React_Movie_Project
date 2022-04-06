import Button from '@mui/material/Button';
import { useState } from 'react';
import { useEffect } from "react";


//Function to delete the selected movie from the list
export function Delete1() {
  const [movies,setmovies]=useState([]);
 const getData=()=>{
   fetch("https://622afbad14ccb950d22b18c9.mockapi.io/movies").then(data=>data.json()).then(mvs=>setmovies(mvs));
};

 useEffect(getData, []);
  return (<div style={{paddingLeft:"20px"}}>
    <h2 style={{color:"red"}}>Click on Movie name to Delete</h2>
    <ul style={{listStyleType:"square"}}>
      {movies.map((movie, index, movies) => <li style={{ margin: "10px" }} key={index} >
        <Button style={{ width: "200px" }} color="secondary" size="medium" variant="outlined" onClick={()=>{fetch(`https://622afbad14ccb950d22b18c9.mockapi.io/movies/${movies[index].id}`, {method: "Delete",}).then(()=>{getData();})}}>{movie.name}</Button>
      </li>
      )}
    </ul>
  </div>);
}
