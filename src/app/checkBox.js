import React,{Component} from "react";

class HideContent extends Component{
	render(){
		return(
			<div className="steg2-checkbox">	
				<label for ="check" className="info-text"> Visa/göm </label>
				<input id="checkbox-styling" type="checkbox" onChange={this.gomEllerVissa.bind(this)} />
			</div>	
		);
	}
	gomEllerVissa(){
		this.props.goem();
	}
}

export default HideContent;  