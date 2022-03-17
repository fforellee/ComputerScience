import './style.css';
import React from "react";

class App extends React.Component() {
    constructor(){
	super();
	this.titulo = "";
    }

    __handler(evento){
	console.log(evento.target.value);
    }

    render(){
	return (
	    <div className="App">
		<input
		    onChange={this.__handler.bind(this)}
		/>
		<p>
		    teste
		    teste
		    teste
		</p>

	    </div>
	);
    }
}

export default App;
