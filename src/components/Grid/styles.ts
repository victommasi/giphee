import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const GridContainer = styled.ul`
  display: grid;
  gap: 20px;
  max-width: 900px;
  margin: 0 auto;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 50px;
  justify-items: center;

  @media screen and (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media screen and (min-width: 768px) and (max-width: 1040px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
