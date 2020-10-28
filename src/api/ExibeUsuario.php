<?php  
    require_once('Usuario.php');
    $id = $_POST["id"];
   
    $user = new Usuario();
    $user->exibirUsuario($id);
  