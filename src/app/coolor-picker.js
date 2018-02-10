import React, {Component} from "react";

class CoolerPicker extends Component{
	render(){
		return(
			<div style={{background: this.props.faerg }} onClick={this.aendraFaerg.bind(this)}></div>
		);
	}	

	aendraFaerg(e){
		this.props.aendraFaerg(this.props.faerg, e.target);
	}
}

export default CoolerPicker;  