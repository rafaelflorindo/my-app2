<?php
    require_once('Usuario.php');
    var_dump($_POST);
    $nome = $_POST["nome"];
    $email = $_POST["email"];
    $login = $_POST["login"];
    $senha = $_POST["senha"];
    $funcao = $_POST["funcao"];
/*$nome= "teste";
$email= "teste";
$login= "teste";
$senha= "teste";
$funcao= "teste";*/

    $user = new Usuario();
    $retorno = $user->insereUsuario($nome, $email, $login, $senha, $funcao);
    
    header("Access-Control-Allow-Origin:*");
    header("Content-type: application/json");
    if ($retorno){
        echo "Registro Inserido com sucesso";
        /*echo json_encode(
            $dados=[
                "mensagem"=>'sucesso'
            ]
        );*/   
    }
    else{
       // echo "Erro ao inserir Registro";
        /*echo json_encode(
            $dados=[
                "mensagem"=>'erro'
            ]
        );*/  
    }
