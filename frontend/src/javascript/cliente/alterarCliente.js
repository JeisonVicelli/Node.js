const buscarPorId = document.forms.buscarPorId;
buscarPorId.addEventListener('buscar');
buscarPorId.addEventListener('click',(evento) =>{
    evento.preventDefault();

    const{ id } = buscarPorId;
    
    if(!id.value){
        document.getElementById('res').innerHTML = 'Insira Id do Cliente.';
        id.focus();
        return;  
    }
fetch(`http://localhost:8081/consultar-clientes/${id.value}`)
.then((response) => {
    if (!response.ok) {
      throw new Error("Erro na requisição. Verifique o URL ou a resposta do servidor.");
    }
    return response.json();
  })
  .then((cliente) => {
    if (!cliente || cliente.length === 0) {
      document.getElementById("resp").textContent = "Cliente não encontrado.";
      return;
    }

    const formsCliente = document.forms.Cliente;

    formsCliente.id.value = cliente.id;    
    formsCliente.nome.value = cliente.nome;                                                                                       ome.
    formsCliente.CPF.value = cliente.CPF;
    formsCliente.Telefone.value = cliente.Telefone;
    formsCliente.DataNascimento.value = cliente.DataNascimento;


  });
});
const formsUm = document.forms.formsUm;
formsUm.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const { idCliente } = formsUm;

  if (!idCliente.value) {
    document.getElementById("resp").textContent =
      "Insira o ID para continuar...";
    idCliente.focus();
    return;
  }

  
const salvar = document.getElementById("salvar");
const formUpdate = document.forms.Cliente;

formUpdate.addEventListener("click", (event) => {
  event.preventDefault();

  const { id, Nome, CPF, Telefone, DataNascimento } = formUpdate;

  if (!id.value || !Nome.value || !CPF.value || !Telefone.value || !DataNascimento.value) {
    if (!id.value) {
      document.getElementById("resp").innerHTML = "Insira o ID do cliente";
      id.focus();
      return;
    } else if (!Nome.value) {
      document.getElementById("resp").innerHTML = "Insira o nome!";
      Nome.focus();
      return;      
    }if(!CPF.value){
      document.getElementById("resp").innerHTML = "Insira o CPF!";
      CPF.focus();       
      return;    
      }if(!Telefone.value){
        document.getElementById("resp").innerHTML = "Insira o telefone!";
        Telefone.focus();
        return; 
    } else {
      document.getElementById("resp").innerHTML = "Insira o data de nascimento!";
      DataNascimento.focus();      
      return;
      
    }
  }

  const formDataUpdate = new FormData(formUpdate); // obtém os dados do formulário

  const json = JSON.stringify(Object.fromEntries(formDataUpdate)); // transforma os dados do formulário em um objeto JSON

  fetch(`http://localhost:8081/clientes/${id.value}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: json, // envia o objeto JSON para o servidor
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data); // imprime a resposta do servidor no console do navegador
      const inputs = document.querySelectorAll("input");
      inputs.forEach((input) => (input.value = ""));
      document.querySelector('input[name="idCliente"]').focus();
      let resp = document.getElementById("resp");
      resp.innerHTML = "Cliente alterado com sucesso!";
      setTimeout(() => {
        resp.style.display = "none";
      }, 5000); // colocando tempo de visualização de 5000 milissegundos (5 segundos)
})
    .catch((error) => {
      //console.error(error); // imprime o erro no console do navegador
      document.getElementById("resp").innerHTML = "Erro ao alterar cliente";
    });
  
