import { connect } from 'react-redux';

import Pages from 'src/components/Pages';

const mapStateToProps = (state) => ({
  logged: state.logged,
});

const mapDispatchToProps = {};

const PagesContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Pages);

export default PagesContainer;
