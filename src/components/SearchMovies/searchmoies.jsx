import { ButtonInfo, Container, Form, Input } from 'components/pages/HomePage/HomePage.styled';
import { NavLink, useLocation, useSearchParams } from 'react-router-dom';

export const FormSearch = ({ onSubmit }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const searchQuery = searchParams.get('query') || '';

  const handleInput = event => {
    const trimmedValue = event.currentTarget.value.trim();
    setSearchParams({ query: trimmedValue.toLowerCase() });
  };

  const requestSubmit = event => {
    event.preventDefault();
    onSubmit(searchParams);
  };

  return (
    <>
      <Container>
        <NavLink to={location.state?.from || '/'}>
          <ButtonInfo>Go Back</ButtonInfo>
        </NavLink>
        <Form onSubmit={requestSubmit}>
          <Input
            onChange={handleInput}
            name="searchQuery"
            value={searchQuery}
            type="text"
            placeholder="Search movies"
          />
        </Form>
      </Container>
    </>
  );
};
