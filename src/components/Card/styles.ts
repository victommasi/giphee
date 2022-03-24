import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const CardContainer = styled.li`
  height: 170px;
  width: 280px;
  position: relative;
  border-radius: 6px;
  box-shadow: 0px 2px 10px -4px rgba(0, 0, 0, 1);

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    transition: background-color 0.2s ease-in-out;
    border-radius: 6px;
  }

  &:hover:before {
    background-color: rgba(0, 0, 0, 0.7);
  }

  &:hover {
    .Card__info {
      display: grid;
      place-content: center;
    }
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 6px;
  } 

  .Card__info {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: none;
    width: 100%;
    height: 100%;
    z-index: 2;
  }
  
  .Card__title, .Card__button {
    color: white;
    font-size: 14px;
    font-weight: 600;
    width: 100%;
    padding: 0 15px;
    margin-bottom: 5px;
  }

  .Card__button {
    background: none;
    border: none;
    transition: opacity 0.2s ease-in-out;

    &:hover {
      opacity: 0.7;
    }
  }

  svg {
    margin-left: 5px;
  }

  .Card__copied {
    position: absolute;
    bottom: 10px;
    left: 40%;
    color: ${colors.orange};
    text-shadow: 2px 2px black;
  }

  .Card__icon-fav {
    position: absolute;
    top: 10px;
    left: 80%;
    width: 50px;
  }

  @media screen and (max-width: 475px) {
    height: 120px;
    width: 220px;

    .Card__title {
      font-size: 10px;
      padding: 5px;
      max-height: 45px;
      display: -webkit-box;
			-webkit-line-clamp: 3;
			-webkit-box-orient: vertical;
			overflow: hidden;
    }
  }
  
  @media screen and (min-width: 475px) and (max-width: 767px) {
    height: 150px;
    width: 260px;

    .Card__title {
      font-size: 11px;
      padding: 5px;
      max-height: 45px;
      display: -webkit-box;
			-webkit-line-clamp: 3;
			-webkit-box-orient: vertical;
			overflow: hidden;
    }
  }
`;
