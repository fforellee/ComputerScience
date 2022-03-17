import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import "./assets/App.css";
import './assets/index.css';
class App extends Component {


  criarNota(titulo, texto){
    console.log(`uma nova nota foi criada ` + titulo + " " + texto)
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota}/>
          <ListaDeNotas notas={[1,1,3]}/>
      </section>
    );
  }
}


export default App;
