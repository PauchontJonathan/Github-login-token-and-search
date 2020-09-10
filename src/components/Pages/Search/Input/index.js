import React from 'react';
import PropTypes from 'prop-types';
import { Input as InputSemantic } from 'semantic-ui-react';

const Input = ({
  searchInput,
  loading,
  onInputChange,
  handleInputSubmit,
}) => {
  const handleChange = (evt) => {
    onInputChange(evt.target.value);
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleInputSubmit();
  };
  return (
    <form onSubmit={handleSubmit}>
      <InputSemantic
        onChange={handleChange}
        value={searchInput}
        loading={loading}
        placeholder="Search..."
      />
    </form>
  );
};

Input.propTypes = {
  loading: PropTypes.bool.isRequired,
  searchInput: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  handleInputSubmit: PropTypes.func.isRequired,
};

export default Input;
