import { connect } from 'react-redux';

import Search from 'src/components/Pages/Search';

const mapStateToProps = (state) => ({
  displayResults: state.displayResults,
});

const mapDispatchToProps = {};

const SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);

export default SearchContainer;
