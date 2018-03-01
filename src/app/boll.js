import React,{Component} from "react";
var px =1;
class Boll extends Component{
	render(){
		
		return(
			<div id="boll-kontainer">
				<div id="boll" ref="rodBoll" test="test"></div>
				<p className="info-text">Tryck på höger tangenten för att flytta bollen</p>
				<button className="btn-styling" onKeyDown= {this.flyttaBoll.bind(this)}>Start</button>
			</div>
		);
	}
	flyttaBoll(e){
	var pixel = ""+px+"px";
     if (e.keyCode == '39') {
      this.refs.rodBoll.style.left = pixel; px++;
    }
   
		
		
	}	
}

export default Boll;  


