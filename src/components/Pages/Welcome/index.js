import React from 'react';
import { Card, Image, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import './welcome.scss';

const Welcome = ({ username, avatar, handleLogout }) => (
  <div id="welcome">
    <Card>
      <Image src={avatar} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{username}</Card.Header>
      </Card.Content>
      <Button onClick={handleLogout}>Se déconnecter</Button>
    </Card>
  </div>
);

Welcome.propTypes = {
  username: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  handleLogout: PropTypes.func.isRequired,
};

export default Welcome;
