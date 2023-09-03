import { FormSearch } from 'components/SearchMovies/searchmoies';
import { useEffect, useState } from 'react';
import { searchMovies } from '../../server/api';
import {
  NavLink,
  useLocation,
  useSearchParams,
} from 'react-router-dom';
import { ImegeLogo, ListMovies } from '../HomePage/HomePage.styled';
import img from '../../../image/1363011.png'
const IMG_URL = `https://image.tmdb.org/t/p/w500`;
export default function SearchForMovies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [listForSearch, setListForSearch] = useState([]);
  const searchQuery = searchParams.get('query') || '';
  const location = useLocation();

  const onFormSearch = query => {
    setSearchParams(query);
  };

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await searchMovies(searchQuery);
        setListForSearch(response.results);
        
      } catch (error) {
        console.error('Error fetching movies:', error.message);
      }
    };
    fetchMovies();
  }, [searchQuery]);

  return (
    <>
      <FormSearch onSubmit={onFormSearch} />
      <ListMovies>
        {listForSearch.map(({ title, id, poster_path }) => (
          <NavLink
            to={`/Movies/${id}`}
            state={{ from: location.pathname }}
            key={id}
          >
            <ImegeLogo
              src={poster_path ? `${IMG_URL}${poster_path}` : `${img}`}
              alt={title}
            />
          </NavLink>
        ))}
      </ListMovies>
    </>
  );
}