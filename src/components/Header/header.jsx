import { NavLink, useLocation } from 'react-router-dom';

const { HeaderWrapper, Navigation, ButtonInfo, Container } = require('components/pages/HomePage/HomePage.styled');

export const Header = () => {
  const location = useLocation()
  return (
    <>
      <Container>
        <HeaderWrapper>
          <Navigation>
            <NavLink to={'/'} state={{ from: location.pathname }}>
              <ButtonInfo>Home Page</ButtonInfo>
            </NavLink>
            <NavLink
              to={'/SearchForMovies'}
              state={{ from: location.pathname }}
            >
              <ButtonInfo>Movies</ButtonInfo>
            </NavLink>
          </Navigation>
        </HeaderWrapper>
      </Container>
    </>
  );
};
