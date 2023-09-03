import { axiosGetMovieReviews } from 'components/server/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ListReviews, Loader } from '../HomePage/HomePage.styled';

export default function MovieReviews() {
  const [review, setreview] = useState(null);
  const [error, setError] = useState(null);
  const { moviesId } = useParams();

  useEffect(() => {
    const fetchReviewById = async () => {
      try {
        const respons = await axiosGetMovieReviews(moviesId);
        if (!respons) {
          throw new Error('no such actors');
        }
        setreview(respons.results);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchReviewById();
  }, [moviesId]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!review) {
    return <Loader/>;
  }

  return (
    <>
      <div>
        <h2>Reviews Movie</h2>
        <ListReviews>
          {review.length === 0 ? (
            <div>No reviews available for this movie.</div>
          ) : (
            review.map(info => (
              <li key={info.id}>
                <h4>{info.author}</h4>
                <p>{info.content}</p>
              </li>
            ))
          )}
        </ListReviews>
      </div>
    </>
  );
}
