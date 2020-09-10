import React from 'react';
import PropTypes from 'prop-types';
import Input from 'src/containers/Pages/Search/Input';
import Results from 'src/containers/Pages/Search/Results';

const Search = ({ displayResults }) => (
  <>
    <Input />
    {displayResults && <Results />}
  </>
);

Search.propTypes = {
  displayResults: PropTypes.bool.isRequired,
};

export default Search;
