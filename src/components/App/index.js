// == Import : npm
import React from 'react';

// == Import : local
import './app.scss';
import Pages from 'src/containers/Pages';
import Nav from 'src/containers/Nav';

// == Composant
const App = () => (
  <div id="app">
    <Nav />
    <Pages />
  </div>
);

// == Export
export default App;
