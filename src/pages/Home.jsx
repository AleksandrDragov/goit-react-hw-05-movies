import { useEffect, useState } from 'react';
import { fetchTrandingMovies } from 'fetch/FetchApi';
import MoviesList from 'components/MoviesList/MoviesList';
import { TrendingToday } from './Home.styles';
const HomePage = () => {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const onFetchMovies = async () => {
      try {
        const trandingMovies = await fetchTrandingMovies();
        setMovies(trandingMovies.results);
      } catch (error) {
        setError(error.message);
      }
    };
    onFetchMovies();
  }, []);

  return (
    <>
      <TrendingToday>
        <h1>Trending today</h1>
      </TrendingToday>
      {error && <div>{error}</div>}
      {movies && <MoviesList movies={movies} />}
    </>
  );
};

export default HomePage;
