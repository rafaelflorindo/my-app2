<?php

abstract class Conexao{

    protected function conectar(){
        try{
            $conn = new PDO("mysql:host=localhost;dbname=react", "root", "");
            return $conn;
        }catch(PDOException $erro){
            return $erro->getMessage();
        }
    }
}

//npm install axio