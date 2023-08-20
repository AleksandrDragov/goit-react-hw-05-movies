import MoviesList from 'components/MoviesList/MoviesList';
import { fetchSearchMovie } from 'fetch/FetchApi';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SerchBarInput, SerchBarForm, SerchBarButton } from './SerchBar.styles';
const MoviesSearchForm = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [foundMovies, setFoundMovies] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');
  const searchQuery = searchParams.get('query') ?? '';

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }
    const userMoviesList = async e => {
      try {
        const data = await fetchSearchMovie(searchQuery);
        setFoundMovies(data.results);
      } catch (error) {
        setError(error.message);
      }
    };
    userMoviesList();
  }, [searchQuery]);

  const handleSubmit = e => {
    e.preventDefault();
    if (inputValue.trim() === '') {
      return setSearchParams({});
    }
    setSearchParams({ query: inputValue.toLowerCase() });
  };

  return (
    <>
      {' '}
      <SerchBarForm onSubmit={handleSubmit}>
        <SerchBarInput
          type="text"
          autoComplete="off"
          autoFocus
          value={inputValue}
          placeholder="Enter movie name"
          onChange={e => setInputValue(e.currentTarget.value)}
        />{' '}
        <SerchBarButton type="submit">Search</SerchBarButton>
      </SerchBarForm>
      {error && <h3>{error}</h3>}
      {foundMovies && <MoviesList movies={foundMovies} />}
    </>
  );
};

export default MoviesSearchForm;
