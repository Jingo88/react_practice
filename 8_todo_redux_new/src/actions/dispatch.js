import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import MainContainer from '../containers/MainContainer'


const PatchMapper = connect(
	function mapStateToProps(state){
		// console.log(state)
		return {data: state};
	},
	function mapDispatchToProps(dispatch){
		return {
			createBook: text => dispatch(createBook(title))
		}
	}
)(MainContainer);

export default PatchMapper