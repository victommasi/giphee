import { faHome, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png'
import { colors } from '../../styles/colors';

import { SideBarContainer } from './styles';

const SideBar: React.FC = () => {
  return (
    <SideBarContainer>
      <aside className="aside">
        <img src={logo} alt="lgo" />
        <nav className="nav">
          <NavLink className={({ isActive }) => isActive ? "active" : ""} to="/home">
            <FontAwesomeIcon className="icon" icon={faHome} size="lg" color={colors.secondary} />
            <span className="text">Home</span>
          </NavLink>
          <NavLink className={({ isActive }) => isActive ? "active" : ""} to="/favorites">
            <FontAwesomeIcon className="icon" icon={faHeart} size="lg" color={colors.secondary} />
            <span className="text">Favorites</span>
          </NavLink>
        </nav>
    </aside>
    </SideBarContainer>
)};

export default SideBar;