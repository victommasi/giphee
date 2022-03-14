import styled from 'styled-components';

export const GridContainer = styled.ul`
  display: grid;
  gap: 20px;
  max-width: 900px;
  margin: 0 auto;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 50px;

  @media screen and (max-width: 425px) {
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
  }

  
  @media screen and (min-width: 426px) and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
  }

  @media screen and (min-width: 769px) and (max-width: 1040px) {
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
  }

`;
