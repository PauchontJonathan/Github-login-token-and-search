/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';

import { Form } from 'semantic-ui-react';

import './loginForm.scss';

const LoginForm = ({ inputValue, changeInput, sendToken }) => {
  const handleChange = (evt) => {
    const newValue = evt.target.value;
    changeInput(newValue);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (inputValue.length > 0) {
      sendToken(inputValue);
    }
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Field>
        <label htmlFor="inputToken">Formulaire de connexion</label>
        <input type="password" id="inputToken" value={inputValue} onChange={handleChange} />
      </Form.Field>
    </Form>
  );
};

LoginForm.propTypes = {
  inputValue: PropTypes.string.isRequired,
  changeInput: PropTypes.func.isRequired,
  sendToken: PropTypes.func.isRequired,
};

export default LoginForm;
