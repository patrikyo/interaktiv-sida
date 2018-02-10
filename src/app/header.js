import React, {Component} from "react";

class Header extends Component{
	render(){
		var fearg = this.props.aendraFaerg;
		return(
			<header style={{background:fearg}}>
				<h1>Interaktiv sida</h1>
			</header>
		);
	}	
}

export default Header;  