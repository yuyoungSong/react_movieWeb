import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const getMovie = async () => {
    const response = await (
      await fetch(`https://nomad-movies.nomadcoders.workers.dev/movies/${id}`)
    ).json();
    console.log(response);
    setMovie(response);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {movie ? (
        <>
          (<h1>{movie.title}</h1>
          <img src={movie.poster_path}></img>)
        </>
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
}

export default Detail;
