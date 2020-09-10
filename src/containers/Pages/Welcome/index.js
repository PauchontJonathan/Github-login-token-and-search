import { connect } from 'react-redux';
import Welcome from 'src/components/Pages/Welcome';
import { logout } from '../../../store/reducer';

const mapStateToProps = (state) => ({
  username: state.username,
  avatar: state.avatar,
});

const mapDispatchToProps = (dispatch) => ({
  handleLogout: () => {
    dispatch(logout());
  },
});

const WelcomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Welcome);

export default WelcomeContainer;
