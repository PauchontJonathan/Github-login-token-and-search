import { connect } from 'react-redux';

import Input from 'src/components/Pages/Search/Input';
import { changeInputSearchValue, handleSearchSubmit } from '../../../../store/reducer';

const mapStateToProps = (state) => ({
  loading: state.loading,
  searchInput: state.searchInput,
});

const mapDispatchToProps = (dispatch) => ({
  onInputChange: (value) => {
    dispatch(changeInputSearchValue(value));
  },
  handleInputSubmit: () => {
    console.log('coucou je suis le submit');
    dispatch(handleSearchSubmit());
  },
});

const InputContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Input);

export default InputContainer;
