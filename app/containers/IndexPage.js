import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as popupsActions from '../actions/settings';
import LoginPage from '../components/LoginPage';

function mapStateToProps(state) {
  return {
    settings: state.settings
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(popupsActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
