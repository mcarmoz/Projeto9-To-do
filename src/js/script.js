//Declrando as variaveis 

let tarefas={};

//Função que valida o prenchimento do campo caso esteja vazio

function validaCampo()
{
    let valida =false;
    if(document.getElementById("task").value =="")
    valida =true
    return valida;
    
}