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
    p {
      display: block;
    }
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 25px;
  } 

  p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 14px;
    font-weight: 600;
    width: 100%;
    padding: 0 15px;
    display: none;
  }

  
  @media screen and (max-width: 425px) {
      height: 100px;
      width: 100px;

    p {
      font-size: 11px;
      padding: 5px;
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
