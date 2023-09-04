import styled from '@emotion/styled';


// header
export const Navigation = styled.nav`
  display: flex;
  gap: 30px;
`;
// Cast // reviews
export const HeaderWrapper = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: start;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background: linear-gradient(to bottom, #ff6b6b, #ffa07a);
  padding: 20px;
  color: #fff;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const List = styled.ul`
  grid-gap: 16px;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0 auto;
  max-width: calc(100vw - 48px);
  padding: 0;
`;

export const ListEL = styled.li`
  width: 200px;
  border-radius: 10px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 2px 1px -1px rgba(0, 0, 0, 0.12);
`;
export const Imege = styled.img`
  height: 200px;
  border-radius: 10px;
  object-fit: cover;
  transition: -webkit-transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1),
    -webkit-transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  width: 100%;
`;
export const InfoActor = styled.p`
  text-align: center;
`;
export const ListReviews = styled.ul`
  grid-gap: 16px;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0 auto;
  max-width: calc(100vw - 48px);
  padding: 0;
`;
// TrendingMovie
export const ImegeLogo = styled.img`
  width: 266px;
  height: 400px;
  border-radius: 5px;
  object-fit: cover;
  transition: -webkit-transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1),
    -webkit-transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    cursor: click;
    -webkit-transform: scale(1.03);
    transform: scale(1.03);
  }
`;

export const ListMovies = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  flex-wrap: wrap;
  -webkit-box-pack: center;
  justify-content: center;
  gap: 15px;
  display: flex;
  position: relative;
  padding: 10px;
`;
export const Title = styled.h1`
  font-size: 2rem;
  color: rgb(92, 171, 245);
  font-weight: 700;
  margin: 1rem 0px;
  display: block;
  text-transform: uppercase;
  text-align: center;
`;
// MoviesDetails.jsx
export const InformationForFilm = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: start;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
`;
export const ImgFilm = styled.img`
  width: 400px;
  height: 500px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 10px;
  align-self: flex-start;
`;
export const ContainerInfoFilm = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  align-self: flex-start;
  padding: 10px 20px;
`;
export const Genres = styled.ul`
  list-style-type: none;
`;
export const Container = styled.div`
  max-width: 1200px;
  margin: 0px auto;
  padding: 0px 20px 20px;
`;
export const ButtonInfo = styled.button`
  text-align: center;
  display: inline-block;
  width: 120px;
  height: 48px;
  border-radius: 30px;
  background-color: #007bff;
  color: #fff;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  font-family: inherit;
  font-size: 20px;
  margin: 10px 0px;
  &:hover {
    cursor: click;
    -webkit-transform: scale(1.03);
    transform: scale(1.03);
    background-color: #0056b3;
  }
`;
export const ContainerButtons = styled.div`
  display: flex;
  gap: 20px;
`;
// FormSearch
export const Form = styled.form`
  margin: 0 auto;
  align-items: center;
  background-color: #fff;
  border-radius: 3px;
  display: flex;
  max-width: 600px;
  overflow: hidden;
  width: 100%;
`;
export const Input = styled.input`
  display: inline-block;
  color: rgb(29, 5, 51);
  width: 100%;
  height: 30px;
  font-style: inherit;
  font-variant: inherit;
  font-weight: inherit;
  font-stretch: inherit;
  line-height: inherit;
  font-family: inherit;
  font-optical-sizing: inherit;
  font-kerning: inherit;
  font-feature-settings: inherit;
  font-variation-settings: inherit;
  font-size: 20px;
  outline: none;
  padding: 8px;
  border: 1px solid rgb(92, 171, 245);
  border-radius: 4px;
  transition: border-color 0.3s ease 0s, box-shadow 0.3s ease 0s;
`;
export const Loader = styled.span`
  .loader {
    width: 100px;
    height: 100px;
    background: linear-gradient(
      165deg,
      rgba(255, 255, 255, 1) 0%,
      rgb(220, 220, 220) 40%,
      rgb(170, 170, 170) 98%,
      rgb(10, 10, 10) 100%
    );
    border-radius: 50%;
    position: relative;
  }

  .loader:before {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    border-radius: 100%;
    border-bottom: 0 solid #ffffff05;
    box-shadow: 0 -10px 20px 20px #ffffff40 inset,
      0 -5px 15px 10px #ffffff50 inset, 0 -2px 5px #ffffff80 inset,
      0 -3px 2px #ffffffbb inset, 0 2px 0px #ffffff, 0 2px 3px #ffffff,
      0 5px 5px #ffffff90, 0 10px 15px #ffffff60, 0 10px 20px 20px #ffffff40;
    filter: blur(3px);
    animation: 2s rotate linear infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
`;
