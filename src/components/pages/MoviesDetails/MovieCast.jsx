import { axiosGetMovieCredits } from 'components/server/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Imege, InfoActor, List, ListEL, Loader } from '../HomePage/HomePage.styled';
import imga from '../../../image/not-found-actor.jpg';
const IMG_URL = `https://image.tmdb.org/t/p/w500`;
export default function MovieCast() {
  const [actors, setactors] = useState([]);
  const [error, setError] = useState(null);
  const { moviesId } = useParams();

  useEffect(() => {
    const fetchCreditsById = async () => {
      
      try {
        const respons = await axiosGetMovieCredits(moviesId);
        if (!respons) {
          throw new Error('no such actors');
        }
        setactors(respons.cast);
      } catch (error) {
        setError(error.message);
      } 
    };
    fetchCreditsById();
  }, [moviesId]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!actors) {
    return <Loader />;
  }

  return (
    <>
      <div>
        <List>
          {actors.map(actor => (
            <ListEL key={actor.id}>
              <Imege
                src={
                  actor.profile_path
                    ? `${IMG_URL}${actor.profile_path}`
                    : `${imga}`
                }
                alt={actor.name}
              />
              <InfoActor>{actor.name}</InfoActor>
              <InfoActor>
                Character:{' '}
                {actor.character ? actor.character : 'no information'}
              </InfoActor>
            </ListEL>
          ))}
        </List>
      </div>
    
    </>
  );
}
