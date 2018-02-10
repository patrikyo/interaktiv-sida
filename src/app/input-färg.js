import React, {Component} from "react";

class InputFaerg extends Component{
	render(){
		return(
		<form onSubmit= {this.inputFaerg.bind(this)}>	
			<input type="search" placeholder="Lägg till en färg" ref="inp"/>
			<input type="submit" value="OK" />
		</form>
		);
	}	

	inputFaerg(e){
		 e.preventDefault();
		this.props.laegTillFaerger(this.refs.inp.value);
	}
}

export default InputFaerg;  