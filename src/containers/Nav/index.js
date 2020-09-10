import { connect } from 'react-redux';

import Nav from 'src/components/Nav';

const mapStateToProps = (state) => ({
  logged: state.logged,
});

const mapDispatchToProps = {};

const NavContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Nav);

export default NavContainer;
