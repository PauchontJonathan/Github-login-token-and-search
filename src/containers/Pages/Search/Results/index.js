import { connect } from 'react-redux';

import Results from 'src/components/Pages/Search/Results';

const mapStateToProps = (state) => ({
  repoResults: state.repoResults,
});

const mapDispatchToProps = {};

const ResultsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Results);

export default ResultsContainer;
