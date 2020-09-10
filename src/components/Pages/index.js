import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import LoginForm from 'src/containers/Pages/LoginForm';
import Welcome from 'src/containers/Pages/Welcome';
import Search from 'src/containers/Pages/Search';
import Presentation from './Presentation';
import './pages.scss';

const Pages = ({ logged }) => (
  <div id="pages">
    <Route exact path="/">
      {!logged && <LoginForm />}
    </Route>
    <Route exact path="/">
      {logged && <Welcome />}
    </Route>
    {!logged && <Redirect to="/" />}
    <Route path="/presentation">
      <Presentation />
    </Route>
    <Route path="/search">
      <Search />
    </Route>
  </div>
);

Pages.propTypes = {
  logged: PropTypes.bool.isRequired,
};

export default Pages;
