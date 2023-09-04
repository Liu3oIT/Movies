import { axiosGetMovieDetails } from 'components/server/api';
import { Suspense, useEffect, useState } from 'react';
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import {
  ButtonInfo,
  Container,
  ContainerButtons,
  ContainerInfoFilm,
  Genres,
  ImgFilm,
  InformationForFilm,
  Loader,
} from '../HomePage/HomePage.styled';
import img from '../../../image/1363011.png';
const IMG_URL = `https://image.tmdb.org/t/p/w500`;

export default function MoviesDetails() {
  const [movieinfo, setMovieinfo] = useState(null);
  const [error, setError] = useState(null);
  const { moviesId } = useParams();
  const location = useLocation();

  useEffect(() => {
    const fetchMoviesById = async () => {
      try {
        const respons = await axiosGetMovieDetails(moviesId);
        if (!respons) {
          throw new Error('no such movie');
        }
        setMovieinfo(respons);
        console.log(respons);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchMoviesById();
  }, [moviesId]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!movieinfo) {
    return <Loader/>;
  }

  const {
    original_title,
    overview,
    genres,
    poster_path,
    vote_average,
    release_date,
  } = movieinfo;
  const goBackPath = location.state?.from || '/';
   const releaseYear = release_date ? release_date.split('-')[0] : '';
  return (
    <>
      <Container>
        <NavLink to={goBackPath}>
          <ButtonInfo>Go Back</ButtonInfo>
        </NavLink>
        <InformationForFilm>
          <ImgFilm
            src={poster_path ? `${IMG_URL}${poster_path}` : `${img}`}
            alt={original_title}
          />
          <ContainerInfoFilm>
            <h2>
              {original_title} ({releaseYear})
            </h2>
            <h3>User score: {Math.round(vote_average * 10)}%</h3>
            <h3>Overview</h3>
            <p>{overview}</p>
            <Genres>
              <h3>Genres</h3>
              {genres.map(({ name, id }) => (
                <p>{name}</p>
              ))}
            </Genres>
          </ContainerInfoFilm>
        </InformationForFilm>
        <h3>Additional information</h3>

        <ContainerButtons>
          <NavLink to="cast">
            <ButtonInfo>Cast</ButtonInfo>
          </NavLink>
          <NavLink to="reviews">
            <ButtonInfo>Reviews</ButtonInfo>
          </NavLink>
        </ContainerButtons>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
}
