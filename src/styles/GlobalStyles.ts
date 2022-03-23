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
    background-color: ${colors.purple};
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    overflow-x: hidden;
    padding-top: 20px;

    @media screen and (max-width: 425px) {
      width: 100px;
    }

    img {
      width: 130px;
      height: auto;
    }

    .nav ul {
      list-style: none;
      
      li {
        position: relative;
        margin: 2em 0;
        
        a {
          font-size: 0.7em;
          line-height: 5em;
          text-transform: uppercase;
          text-decoration: none;
          letter-spacing: 0.4em;
          color: rgba(255,255,255,0.3);
          display: block;
          transition: all ease-out 300ms;
        }
        
        &.active a {
          color: white;
        }
        
        &:not(.active)::after {
          opacity: 0.2;
        }
        
        &:not(.active):hover a {
          color: rgba(#FFF, 0.75);
        }
        
        &::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 0.2em;
          background: black;
          left: 0;
          bottom: 0;
          background-image: linear-gradient(to right, ${colors.primary}, ${colors.secondary})
        }
      }
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
