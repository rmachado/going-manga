import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import FontIcon from 'material-ui/FontIcon';
import Badge from 'material-ui/Badge';

const forceNavDown = { top: '64px' };
const linkStyle = { textDecoration: 'none', color: 'inherit' };

const Icon = (name) => (<FontIcon className="material-icons">{name}</FontIcon>);

const Menu = ({ open }) => (
  <Drawer open={open} containerStyle={forceNavDown}>
    <Subheader>Explora</Subheader>
    <MenuItem
      linkButton leftIcon={Icon('dashboard')} containerElement={<Link to="/" style={linkStyle} />}
      primaryText="Todos los mangas" />
    <MenuItem leftIcon={Icon('view_list')}>
      <Link to="/updates" style={linkStyle}>Últimos actualizados</Link>
    </MenuItem>
    <Divider />
    <Subheader>Tu colección</Subheader>
    <MenuItem leftIcon={Icon('star')} rightIcon={<Badge badgeContent={4} primary />}>
      <Link to="/favorites" style={linkStyle}>Favoritos</Link>
    </MenuItem>
    <MenuItem leftIcon={Icon('watch_later')}>
      <Link to="/recent" style={linkStyle}>Recientes</Link>
    </MenuItem>
    <Divider />
    <Subheader>Configuración</Subheader>
    <MenuItem leftIcon={Icon('public')}>
      <Link to="/fonts" style={linkStyle}>Fuentes</Link>
    </MenuItem>
    <MenuItem leftIcon={Icon('settings')}>
      <Link to="/settings" style={linkStyle}>Ajustes</Link>
    </MenuItem>
  </Drawer>
);

Menu.propTypes = {
  open: PropTypes.bool
};

Menu.defaultProps = {
  open: true
};

export default Menu;
