import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Main from '../components/Main';
import * as actionCreators from '../actions/actions'

function mapDispatchToProps(dispatch){
	return bindActionCreators(actionCreators, dispatch);
}

function mapStateToProps(state){
	console.log('we are in map state to props')
	console.log(state)
	return {state: state}
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);