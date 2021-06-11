function exibirMensagem(){
    var nome = document.getElementById("txtNome");
    var idade = document.getElementById("txtIdade");
    var div = document.getElementById("div1");

    if(idade.value<18){
        alert(nome.value +" é menor de idade");
        div.style.borderColor = "#FF0000";
    }else{
        alert(nome.value +" é maior de idade");
        div.style.borderColor = "#00FF00";
    }
    if(idade.value>=18){
        var valorIdade =idade.value;
        while(valorIdade>0){

            alert(valorIdade);
            valorIdade = valorIdade -1;
        }
    }
}


function addCliente(){
    var nome = document.getElementById("txtNome").value;
    var email = document.getElementById("txtEmail").value;
    
    if(nome == "" || email == ""){
        alert("Os campos devem ser preenchidos");
    }else{
        var tr = document.createElement("tr");
        var tdNome = document.createElement("td");
        var tdEmail = document.createElement("td");

        tr.appendChild(tdNome);
        tr.appendChild(tdEmail);

        tdNome.innerHTML = nome;
        tdEmail.innerHTML = email;

        var tbody = document.getElementById("tbody-clientes");

        tbody.appendChild(tr);

        document.getElementById("txtNome").value = "";
        document.getElementById("txtEmail").value = "";
    }
}