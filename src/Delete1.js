import Button from '@mui/material/Button';

export function Delete1({ movies, setmovie }) {
  return (<div>
    <h2>Click on Movie name to Delete</h2>
    <ul>
      {movies.map((movie, index, movies) => <li style={{ margin: "10px" }} key={index} >
        <Button style={{ width: "200px" }} size="medium" variant="outlined" onClick={() => setmovie([...movies.slice(0, index), ...movies.slice(index + 1)])}>{movie.name}</Button>
      </li>
      )}
    </ul>
  </div>);
}
