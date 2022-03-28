import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const SideBarContainer = styled.ul`
  text-align: center;
  height: 100%;
  width: 200px;
  background-color: ${colors.purple};
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  overflow-x: hidden;
  padding-top: 20px;
  transition: width ease-out 300ms;

  @media screen and (max-width: 768px) {
    width: 70px;
  }

  img {
    width: 100px;
    height: auto;

    @media screen and (max-width: 768px) {
      width: 40px;
    }
  }

  .nav {
    a {
      position: relative;
      margin: 2em 0;
      font-size: 0.7em;
      line-height: 5em;
      text-transform: uppercase;
      text-decoration: none;
      letter-spacing: 0.4em;
      color: rgba(255, 255, 255, 0.3);
      display: block;
      transition: all ease-out 300ms;

      &.active {
        color: white;

        .icon {
          color: white
        }
      }
      
      &:not(.active)::after {
        opacity: 0.2;
      }
      
      &:not(.active):hover {
        color: rgba(255, 255, 255, 0.75);

        .icon {
          color: rgba(255, 255, 255, 0.75);
        }
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

      .icon {
        color: rgba(255, 255, 255, 0.3);
        margin-right: 10px;
        transition: all ease-out 300ms;
      }

      @media screen and (max-width: 768px) {
        .icon {
          margin-right: 0;
        }

        .text {
          display: none;
        }
      }
    }

  }
`;
