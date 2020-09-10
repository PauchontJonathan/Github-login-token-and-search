import { connect } from 'react-redux';
import { changeInputValue, handleToken } from 'src/store/reducer';
import LoginForm from '../../../components/Pages/LoginForm';

const mapStateToProps = (state) => ({
  inputValue: state.input,
});

const mapDispatchToProps = (dispatch) => ({
  changeInput: (inputValue) => {
    dispatch(changeInputValue(inputValue));
  },
  sendToken: (value) => {
    dispatch(handleToken(value));
  },
});


const LoginFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginForm);

export default LoginFormContainer;
