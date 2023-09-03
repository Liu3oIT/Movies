import { useEffect, useState } from 'react';
import { axiosRequestTrendingMovie } from '../server/api';
import { NavLink, useLocation } from 'react-router-dom';
import { Container, ImegeLogo, ListMovies, Title } from 'components/pages/HomePage/HomePage.styled';
const IMG_URL = `https://image.tmdb.org/t/p/w500`;
export const ListTrending = () => {
  const [topdaymovies, setTopDayMovies] = useState([]);
  const location = useLocation();
  useEffect(() => {
    const fetchTrendingMoies = async () => {
      try {
        const respons = await axiosRequestTrendingMovie();
        const { results } = respons;
        setTopDayMovies(prevState => [...prevState, ...results]);
      } catch (error) {
        console.error('Error fetching trending movies:', error);
      }
    };
    fetchTrendingMoies();
  }, []);
  return (
    <>
      <Container>
        <Title>Trending Today</Title>
        <ListMovies>
          {topdaymovies.map(({ id, title, poster_path }) => (
            <li key={id}>
              <NavLink to={`/Movies/${id}`} state={{ from: location.pathname }}>
                <ImegeLogo src={`${IMG_URL}${poster_path}`} alt={title} />
              </NavLink>
            </li>
          ))}
        </ListMovies>
      </Container>
    </>
  );
};
