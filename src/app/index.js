import React, {Component} from "react";
import ReactDOM from "react-dom";
import Header from "./header";
import CoolerPicker from "./coolor-picker";
import InputFaerg from "./input-färg";
import TomFaergLista from "./tom";
import HideContent from "./checkBox";
import Boll from "./boll";
require("./css/design.css");

class App extends Component{
	constructor(){
		super();
		this.state={
			faerger: ["green","blue","red"],
			valdFaerg: "",
			visa: true
		}
	}
	laegTillFaerger(faerg){
		var arr = this.state.faerger;
		arr.push(faerg);
		this.setState({faerger: arr});
	}
	aendraFaerg(faerg){
		this.setState({valdFaerg:faerg});

	}
	tomLista(){
		this.setState({faerger: []});
	}
	goem(){
		this.setState({visa: !this.state.visa});

	}
	render(){
		var arr = this.state.faerger;
		arr = arr.map((ele,index) =>{
			return <CoolerPicker faerg={ele} key={index} aendraFaerg= {this.aendraFaerg.bind(this)}/>
		});

		var visa = "";
		if(this.state.visa){
			visa = "visa";
		}
		else{
			visa = "gom";
		}
		return(
			<div id="wrapper">	
				<Header aendraFaerg = {this.state.valdFaerg}/>
				<div className= {visa}>
					<div id="faerg-kontainer">
						{arr}
					</div>	
					<div className="faerg-form">
						<InputFaerg laegTillFaerger = {this.laegTillFaerger.bind(this)}  />
					<TomFaergLista tomLista= {this.tomLista.bind(this)} />
					</div>
				</div>	
					<HideContent goem= {this.goem.bind(this)}/>
				<Boll />
			</div>
		);
	}	
}



ReactDOM.render(<App / >, document.getElementById("App"));