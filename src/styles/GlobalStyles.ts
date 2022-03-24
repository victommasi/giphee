import { createGlobalStyle } from 'styled-components';
import { colors } from './colors';

export default createGlobalStyle`
  .App {
    display: flex;
    align-items: center;
    height: inherit;
    background-color: ${colors.primary};
  }
`;
