import { createGlobalStyle } from 'styled-components';
import { colors } from './colors';

export default createGlobalStyle`
  .App {
    text-align: center;
    display: flex;
    align-items: center;
    height: inherit;
    background-color: ${colors.primary};
    overflow-y: hidden;
  }

  .App-logo {
    height: 40vmin;
    pointer-events: none;
  }

  .App > .container {
    max-width: 1400px;
    max-height: 860px;
    margin: 0 auto;
    padding: 0px 30px;
    background-color: ${colors.primary};
    overflow-y: auto;

    /* width */
    ::-webkit-scrollbar {
      width: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: ${colors.secondary}; 
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: ${colors.gray10}; 
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: ${colors.gray50}; 
    }
  }

  .App aside {
    height: 100%;
    width: 200px;
    background-color: ${colors.white};
    position: relative;

    &:before {
      content: "";
      position: absolute;
      top: 0;
      right: -25px;
      background-color: ${colors.primary};
      height: 50px;
      width: 25px;
      border-top-left-radius: 25px;
      box-shadow: 0 -25px 0 0 ${colors.white}; 
    }

    &:after {
      content: "";
      position: absolute;
      bottom: 0;
      right: -25px;
      background-color: ${colors.primary};
      height: 50px;
      width: 25px;
      border-bottom-left-radius: 25px;
      box-shadow: 0 25px 0 0 ${colors.white}; 
    }
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
