const formsBuscar = document.getElementById("formsBuscar");
formsBuscar.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const id = document.getElementById("id");

  if (!id.value) {
    document.getElementById("resp").textContent =
      "Insira o ID para continuar...";
    id.focus();
    return;
  }

  fetch(`http://localhost:8081/clientes-consulta/${id.value}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          "Erro na requisição. Verifique o URL ou a resposta do servidor."
        );
      }
      return response.json();
    })
    .then((cliente) => {
      // Verificando se cliente existe
      if (!cliente || cliente.length === 0) {
        document.getElementById("resp").textContent = "Cliente não encontrado.";
        return;
      }
      const formAlterar = document.forms.Cliente;

      formAlterar.id.value = cliente.id;
      formAlterar.nome.value = cliente.Nome;
      formAlterar.CPF.value = cliente.CPF;
      formAlterar.telefone.value = cliente.Telefone;
      formAlterar.dataNascimento.value = cliente.DataNascimento;
    })
    .catch((error) => console.log(error));
});

const alterar = document.getElementById("alterar");

alterar.addEventListener("click", (event) => {
  event.preventDefault();

  const formAlterar = document.forms.Cliente;

  const { id, CPF, nome, telefone, dataNascimento } = formAlterar;

  if (!CPF.value || !nome.value || !telefone.value || !dataNascimento.value) {
    if (!CPF.value) {
      document.getElementById("resp").innerHTML = "Insira o CPF!";
      CPF.focus();
      return;
    } else if (!telefone.value) {
      document.getElementById("resp").innerHTML = "Insira o Telefone!";
      telefone.focus();
      return;
    } else if (!dataNascimento.value) {
      document.getElementById("resp").innerHTML = "Insira o DataNascimento!";
      dataNascimento.focus();
      return;
    } else {
      document.getElementById("resp").innerHTML = "Insira o nome!";
      nome.focus();
      return;
    }
  }

  const FormData = new FormData(formAlterar); // obtém os dados do formulário

  const json = JSON.stringify({
    id: id.value,
    Nome: nome.value,
    CPF: CPF.value,
    Telefone: telefone.value,
    DataNascimento: dataNascimento.value,
  }); // transforma os dados do formulário em um objeto JSON

  fetch(`http://localhost:8081/clientes/${id.value}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: json, // envia o objeto JSON para o servidor
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data); // imprime a resposta do servidor no console do navegador
      formAlterar.reset();
      document.getElementById("id").focus();
      let resp = document.getElementById("resp");
      resp.innerHTML = "Cliente alterado com sucesso!";
      setTimeout(() => {
        resp.style.display = "none";
      }, 10000); // colocando tempo de visualização de 5000 milissegundos (5 segundos)
    })
    .catch((error) => {
      console.error(error); // imprime o erro no console do navegador
      document.getElementById("resp").innerHTML = "Erro ao alterar cliente";
    });
});
