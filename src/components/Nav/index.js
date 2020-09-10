import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const Nav = ({ logged }) => (
  <Menu color="blue" inverted>
    <Menu.Item as={NavLink} to="/" exact>
      Accueil
    </Menu.Item>
    { logged && (
      <>
        <Menu.Item as={NavLink} to="/search">
          Recherche
        </Menu.Item>
        <Menu.Item as={NavLink} to="/presentation">
        A propos
        </Menu.Item>
      </>
    )}
  </Menu>
);

Nav.propTypes = {
  logged: PropTypes.bool.isRequired,
};

export default Nav;
