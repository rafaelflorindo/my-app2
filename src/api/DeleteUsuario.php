<?php  
    require_once('Usuario.php');
    $id = $_POST["id"];
   
    $user = new Usuario();
    $retorno=$user->deletarUsuario($id);

    header("Access-Control-Allow-Origin:*");
    header("Content-type: application/json");
    if ($retorno){
        echo "Registro deletado com sucesso";
    }
    else{
       // echo "Erro ao inserir Registro"; 
    }

  