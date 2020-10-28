import React from 'react';
import './App.css';
import axios from "axios";

class App extends React.Component{
  state={
    nome:"",
    email:"",
    login:"",
    senha:"",
    funcao:"",
    resposta:""
  };
  //método para adicionar
  addNome = async e =>{
    await this.setState({
      nome: e.target.value,
    })
  }
  addEmail = async e =>{
    await this.setState({
      email: e.target.value,
    })
  }
  addLogin = async e =>{
    await this.setState({
      login: e.target.value,
    })
  }
  addSenha = async e =>{
    await this.setState({
      senha: e.target.value,
    })
  }
  addFuncao = async e =>{
    await this.setState({
      funcao: e.target.value,
    })
  }
  //https://www.youtube.com/watch?v=96DuZ33NX_Y
  //https://www.youtube.com/watch?v=96DuZ33NX_Y
  //https://material-ui.com/pt/
  //https://www.youtube.com/watch?v=enxpq9EYyew&t=33s
  //https://www.youtube.com/watch?v=enxpq9EYyew&t=33s
  
  submit = e =>{
    e.preventDefault();
    //console.log(this.state.nome)
    let formData = new FormData();
    formData.append("nome",this.state.nome);
    formData.append("email",this.state.email);
    formData.append("login",this.state.login);
    formData.append("senha",this.state.senha);
    formData.append("funcao",this.state.funcao);

    const url = "http://localhost/ReactUnifamma/my-app2/src/api/";
    
    axios.post(url, formData)//Cliente http para request
//    .then(res=>console.log(res.data))
    .then(res=>{
      this.setState({resposta:1});
    })
    //.catch(err=>console.log(err));
    .catch(err=>{
      this.setState({resposta:0});
    })

    /*.then((response)=>response.json())
    .then((responseJson)=>
    {
      this.setState({
        resposta:responseJson
      });
      console.log(this.state.resposta);
    }
    )*/
  } 
  render(){
    return(
      <div className="App">
          <input
           onChange={this.addNome}
           className="form-control"
           value={this.state.nome}
           type="text" placeholder="Adicionar nome" />
          <br />
          <input
           onChange={this.addEmail}
           className="form-control"
           value={this.state.email}
           type="email" placeholder="Adicionar e-mail" />
          <br />
          <input
           onChange={this.addLogin}
           className="form-control"
           value={this.state.login}
           type="text" placeholder="Adicionar login" />
          <br />
          <input
           onChange={this.addSenha}
           className="form-control"
           value={this.state.senha}
           type="password" placeholder="Adicionar Senha" />
          <br />
          <input
           onChange={this.addFuncao}
           className="form-control"
           value={this.state.funcao}
           type="text" placeholder="Adicionar função" />
          <br />
          <button
          onClick={this.submit}
          className="btn btn-success">Adicionar</button>

          {this.state.resposta ? <div className="alert alert-success" role="alert">Registro Inserido com sucesso</div> : <p></p>}
     
      </div>
    );
    }
}

export default App;
