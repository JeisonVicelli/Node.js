const { response } = require("express");
const { isObjectIdOrHexString } = require("mongoose");

const buscar = document.getElementById('buscar');
buscar.addEventListener('click',(evento) =>{
    evento.preventDefault();
    const idBuscado = document.getElementById('id').value;
    if(!idBuscado){
        document.getElementById('res').innerHTML = 'Insira Id do Cliente.';
        return;  
    }
fetch(`http://localhost:8081/clientes/${idBuscado}`)
.then((response) => {
    if (!response.ok) {
      throw new Error("Erro na requisição. Verifique o URL ou a resposta do servidor.");
    }
    return response.json();
  })
  .then((cliente) => {
    // Verificando se cliente existe
    if (!cliente || cliente.length === 0) {
      document.getElementById("resp").textContent = "Cliente não encontrado.";
      return;
    }

    const formsData = document.forms.Cliente;

    formsData.                                                                                           ome.value = cliente.Nome;
    formsData.CPF.value = cliente.CPF;


  });
});
