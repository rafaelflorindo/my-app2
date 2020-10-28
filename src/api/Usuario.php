<?php
require_once('Conexao.php');

class Usuario extends Conexao{
    private $id, $nome, $email, $login, $funcao, $conn;

    public function __construct()
    {
        $this->conn = $this->conectar();
    }

    public function insereUsuario($nome, $email, $login, $senha, $funcao){
        $this->nome = $nome;
        $this->email = $email;
        $this->login = $login;
        $this->senha = $senha;
        $this->funcao = $funcao;

        $stmt = $this->conn->prepare("INSERT INTO usuario (nome, email, login, senha, funcao) values 
        (:NOME, :EMAIL, :LOGIN, :SENHA, :FUNCAO)");
        $stmt->bindParam(":NOME", $this->nome);
        $stmt->bindParam(":EMAIL", $this->email);
        $stmt->bindParam(":LOGIN", $this->login);
        $stmt->bindParam(":SENHA", $this->senha);
        $stmt->bindParam(":FUNCAO", $this->funcao);

        if ($stmt->execute()) 
            return 1;
        else 
            return 0;
    }
    public function exibeUsuario(){
        $retorno = $this->conectar()->prepare("SELECT * FROM usuario");
        $retorno->execute();
        
        $results = $retorno->fetchAll(PDO::FETCH_ASSOC);
        
        header("Access-Control-Allow-Origin:*");
        header("Content-type: application/json");
        echo json_encode($results);
    }
    public function exibirUsuario($id){
        $this->id=$id;

        $stmt = $this->conn->prepare("SELECT * FROM usuario where id = :ID");
        $stmt->bindParam(":ID", $this->id);
        $stmt->execute();
        
        $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
        
        header("Access-Control-Allow-Origin:*");
        header("Content-type: application/json");
        echo json_encode($results);
    }
    public function deletarUsuario($id){
        $this->id=$id;
        
        $stmt = $this->conn->prepare("DELETE FROM usuario where id = :ID");
        $stmt->bindParam(":ID", $this->id);
        $stmt->execute();
        
        if ($stmt->execute()) 
            return 1;
        else 
            return 0;
    }
}
