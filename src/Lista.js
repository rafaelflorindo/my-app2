import React from 'react';
import './App.css';
import Tabela from './Tabela';

export default class App extends React.Component {
  constructor(){
    super();
    
    this.state=({
      db: [] 
     });
    this.exibirUsuario()
  }
   exibirUsuario(){
    //realiza a requisição http
    fetch("http://localhost/reactUnifamma/my-app2/src/api/Tabela.php")
    //aguarda a resposta de um json
    .then((response)=>response.json())
    .then((responseJson)=>
    {
      this.setState({
        db:responseJson
      });
     // console.log(this.state.db);
    }
    )
  }
  render(){
    return(
      <div>
        <Tabela arrayUsuarios={this.state.db} />
        <br />
      </div>
    );
  }
}