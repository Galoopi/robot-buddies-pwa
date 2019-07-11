import React,{Component} from 'react';

class Header extends Component {
	// check if this will help your performance , only useful sometimes
	shouldComponentUpdate(nextProps,nextState){
		return false;
	}

	render(){
		return <h1 className = "header tc f1" > Robot Buddies < /h1>
	
}
}

export default Header;
