import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const FavoritesContainer = styled.section`
    max-width: 1400px;
    max-height: 860px;
    margin: 0 auto;
    padding: 0 30px;
    background-color: ${colors.primary};
    overflow-y: auto;
    height: 100%;

    @media screen and (max-width: 475px) {
      margin: 0 0 0 auto;
      padding-top: 20px;
      padding-bottom: 20px;
    }

    ::-webkit-scrollbar {
      width: 10px;
    }

    ::-webkit-scrollbar-track {
      background: ${colors.secondary}; 
    }
    
    ::-webkit-scrollbar-thumb {
      background: ${colors.gray10}; 
    }

    ::-webkit-scrollbar-thumb:hover {
      background: ${colors.gray50}; 
    }
  }

  h1 {
    font-size: 18px;
    font-weight: 600;
    color: ${colors.secondary};
    width: 100%;

    @media screen and (max-width: 767px) {
      font-size: 14px;
    }
  }

  .remove-btn {
    background: ${colors.secondary};
    border: none;
    width: 120px;
    border-radius: 4px;
    padding: 10px;
    color: ${colors.white};
    font-weight: 600;
    transition: all 0.2s ease-in-out;
    opacity: 0.9;

    &:hover, &:focus {
      opacity: 0.7;
    }
  }

  .fab-button {
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
`;
