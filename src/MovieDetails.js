import { useParams } from "react-router-dom";
import { NotFound } from "./NotFound"

export function MovieDetails({ movies }) {
  const { id } = useParams();
  const movie = movies[id];
  return (movie!==undefined ? <div>
    <div>
    <iframe width="100%" height="600" src={movie.trailer} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
    <div className="movie-detail-container">
      <div className="movie-specs">
        <h3 className="movie-name">{movie.name}</h3>
        <p className="movie-rating">⭐ {movie.rating} </p>
      </div>
      <p className="movie-summary">{movie.summary}</p>
    </div>
  </div> : <NotFound />);
}
