import { createGlobalStyle } from 'styled-components';
import { colors } from './colors';

export default createGlobalStyle`
  .App {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    background-color: ${colors.primary};
    padding: 50px 30px;
  }

  .App-logo {
    height: 40vmin;
    pointer-events: none;
  }

  .App > .container {
    max-width: 900px;
    margin: 0 auto;
  }

  .App .search {
    text-align: left;
    display: flex;
    align-items: center;
  }

  .App .search > input {
    background-color: transparent;
    border: none;
    font-size: 20px;
    font-weight: 600;
    color: ${colors.secondary};
    margin-left: 10px;
    width: 100%;

    @media screen and (max-width: 767px) {
      font-size: 16px;
    }
  }

  .App .search > input::placeholder {
    color: ${colors.secondary};
    font-weight: 600;
  }

  .App .fab-button {
    position: fixed;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: ${colors.secondary};
    border: none;
    inset: 90% 0% 0% 90%;
    box-shadow: 0px 2px 10px -4px rgba(0, 0, 0, 1);
    transition: opacity .2s ease-in-out;

    &:hover, &:focus {
      opacity: 0.7;
    }

    @media screen and (max-width: 425px) {
      inset: 90% 0% 0% 80%;
    }
  }

`;
