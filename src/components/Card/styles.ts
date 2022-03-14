import styled from 'styled-components';

export const CardContainer = styled.li`
  height: 300px;
  width: 300px;
  border-radius: 25px;
  position: relative;

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    border-radius: 25px;
    transition: background-color 0.2s ease-in-out;
  }

  &:hover:before {
    background-color: rgba(0, 0, 0, 0.7);
  }

  &:hover {
    .Card__info {
      display: block;
    }
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 25px;
  } 

  .Card__info {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: none;
    width: 100%;
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
    color: white;
  }
  
  @media screen and (max-width: 425px) {
      height: 100px;
      width: 100px;

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

  @media screen and (min-width: 426px) and (max-width: 768px) {
    height: 150px;
    width: 150px;
  }

  @media screen and (min-width: 769px) and (max-width: 1040px) {
    height: 200px;
    width: 200px;
  }
`;
