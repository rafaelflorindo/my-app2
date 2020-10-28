import React from 'react';
import axios from "axios";

export default class Tabela extends React.Component{
    state={
        id:'',
        db:[],
        resposta:''
    }

    edit=(parametro)=>{
        this.setState({id:parametro});
        //console.log(this.state.id);

        let formData = new FormData();
       // console.log(this.state.id)
        
        formData.append("id",this.state.id);
       
        const url = "http://localhost/ReactUnifamma/my-app2/src/api/ExibeUsuario.php";
        
        axios.post(url, formData)//Cliente http para request
        .then(response => response.data)
        .then((data) => {
            this.setState(
                { 
                    db: data 
                }
            )
            console.log(this.state.db)
        })
        
    }
    delete=(parametro)=>{
       // console.log(parametro)
        this.setState({id:parametro});
        //console.log(this.state.id);

        let formData = new FormData();     
        formData.append("id",this.state.id);
       
        const url = "http://localhost/ReactUnifamma/my-app2/src/api/DeleteUsuario.php";
        
        axios.post(url, formData)//Cliente http para request
        .then(res=>{
            this.setState({resposta:1});
          })
          .catch(err=>{
            this.setState({resposta:0});
          })
    }
    
    render(){
        return(
            <div className="App">
                <table className="TabelaUsuarios">
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>NOME</td>
                            <td>LOGIN</td>
                            <td>SENHA</td>
                            <td>FUNÇÃO</td>
                            <td>Ação</td>
                        </tr>
                    </thead>
                    <tbody>
                    {
                    this.props.arrayUsuarios.map(
                        linha=>
                        <tr key={linha.id}>
                            <td>{linha.id}</td>
                            <td>{linha.nome}</td>
                            <td>{linha.login}</td>
                            <td>{linha.senha}</td>
                            <td>{linha.funcao}</td>
                            <td>
                                <button
                                onClick={()=>this.edit(linha.id)}
                                className="btn btn-primary">ALTERAR</button>
                                
                                <button
                                onClick={()=>this.delete(linha.id)}
                                className="btn btn-danger">EXCLUIR</button>
                             
                            </td>
                        </tr>
                    )
                  }
                    </tbody>
                </table>
            </div>
        );
    }
}