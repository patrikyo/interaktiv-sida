import React,{Component} from "react";

class TomFaergLista extends Component{
	render(){
		return(
			<span className="radera" onClick={this.tomLista.bind(this)}>X 
				<span>Töm lista</span>
			</span> 
		);
	}
	tomLista(){
		this.props.tomLista();
	}
}

export default TomFaergLista;  