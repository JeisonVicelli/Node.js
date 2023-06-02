const formsBuscar = document.getElementById('formsBuscar');
formsBuscar.addEventListener("click", (evento) => {
  evento.preventDefault();
  const id = document.getElementById('id');

  if (!id.value) {
    document.getElementById("resp").textContent =
      "Insira o ID para continuar...";
    id.focus();
    return;
  }

  fetch(`http://localhost:8081/produtos-consulta/${id.value}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          "Erro na requisição. Verifique o URL ou a resposta do servidor."
        );
      }
      return response.json();
    })
    .then((produto) => {
      // Verificando se cliente existe
      if (!produto || produto.length === 0) {
        document.getElementById("resp").textContent = "Produto não encontrado.";
        return;
      }
      const formsDois = document.forms.Cliente;

      formsDois.id.value = produto.id;
      formsDois.codigo.value = produto.Codigo;
      formsDois.nome.value = produto.Nome;
      formsDois.marca.value = produto.Marca;
      formsDois.valor.value = produto.Valor;
    })
    .catch((error) => console.log(error));
});



const alterar = document.getElementById("alterar");
const formAlterar = document.forms.Produto;

formAlterar.addEventListener("submit", (event) => {
  event.preventDefault();

  const {id , codigo, nome, marca, valor } = formAlterar;

  if (!codigo.value || !nome.value || !marca.value || !valor.value) {

    if (!codigo.value) {
      document.getElementById("resp").innerHTML = "Insira o codigo!";
      codigo.focus();
      return;
    } else if (!nome.value) {
      document.getElementById("resp").innerHTML = "Insira o nome!";
      nome.focus();
      return;
    } else if (!marca.value) {
      document.getElementById("resp").innerHTML = "Insira o marca!";
      marca, valor.focus();
      return;
    } else {
      document.getElementById("resp").innerHTML = "Insira o valor!";
      valor.focus();
      return;
    }
  }

  const formularioAlterado = new FormData(formAlterar); // obtém os dados do formulário

  const json = JSON.stringify(Object.fromEntries(formularioAlterado)); // transforma os dados do formulário em um objeto JSON

  fetch(`http://localhost:8081/produtos/${id.value}`, {
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
      document.querySelector('input[id="id"]').focus();
      let resp = document.getElementById("resp");
      resp.innerHTML = "Produto alterado com sucesso!";
      setTimeout(() => {
        resp.style.display = "none";
      },10000); // colocando tempo de visualização de 5000 milissegundos (5 segundos)
    })
    .catch((error) => {
      console.error(error); // imprime o erro no console do navegador
      document.getElementById("resp").innerHTML = "Erro ao alterar produto";
    });
});