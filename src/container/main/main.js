'use strict';
import React ,{ Component } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';;
class HomePage extends Component{
	constructor(props){
		super(props);

	}
	render(){
		return(
			<div>hello</div>
			)
	}
}
const mapStateToProps = (state, props) => {
    return {
    }
};

export default connect(
    mapStateToProps,
    {

    }
)(HomePage)