const criar = document.getElementById("criar");

criar.addEventListener("click", (evento) => {
  evento.preventDefault();

  //Tratando os dados
  const id = document.querySelector('input[name="id"]');
  const Codigo = document.querySelector('input[name="Codigo"]');
  const Nome = document.querySelector('input[name="Nome"]');
  const Marca = document.querySelector('input[name="Marca"]');
  const Valor = document.querySelector('input[name="Valor"]');

  if (
    !id.value ||
    !Codigo.value ||
    !Nome.value ||
    !Marca.value ||
    !Valor.value
  ) {
    if (!id.value) {
      document.getElementById("res").innerHTML = "Insira o ID";
      id.focus();
      return;
    } else if (!Codigo.value) {
      document.getElementById("res").innerHTML = "Insira o Codigo";
      Codigo.focus();
      return;
    } else if (!Valor.value) {
      document.getElementById("res").innerHTML = "Insira o Valor";
      Valor.focus();
      return;
    } else if (!Nome.value) {
      document.getElementById("res").innerHTML = "Insira o Nome";
      Nome.focus();
      return;
    } else {
      document.getElementById("res").innerHTML = "Insira o Data de nascimento";
      Marca.focus();
      return;
    }
  }
  

  const formProduto = document.getElementById("Produto");
  const formProdutoPronto = new FormData(formProduto); // obtém os dados do formulário

  const json = JSON.stringify(Object.fromEntries(formProdutoPronto)); // transforma os dados do formulário em um objeto JSON

  fetch("http://localhost:8081/produtos ", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: json, // envia o objeto JSON para o servidor
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const inputs = document.querySelectorAll("input");
      inputs.forEach((input) => (input.value = ""));
      id.focus();
      document.getElementById("res").innerHTML = "Cadastrado com sucesso!";
    })
    .catch((erro) => {
      console.log(erro);
      document.getElementById("res").innerHTML = "Erro ao cadastrar";
    });
});
