document.addEventListener("DOMContentLoaded", () => {
  const vender = document.getElementById("vender");
  const produto = document.querySelector("produto");
  const valor = document.querySelector("valor");

  produto.addEventListener("input", () => {
    const produtoSelecionado = produto.value;

    fetch(`http://localhost:8081/produtos-consulta/${produtoSelecionado}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.valor) {
          valor.value = data.valor;
        } else {
          valor.value = "";
        }
      })
      .catch((error) => {
        console.error(error);
        valor.value = "";
      });
  });

  vender.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const id = document.getElementById("id");
    const cliente = document.getElementById("cliente");
    const data = document.getElementById("data");

    if (!id.value || !cliente.value || !produto.value || !data.value) {
      if (!id.value) {
        document.getElementById("resp").innerHTML = "Insira o Id da venda!";
        id.focus();
        return;
      } else if (!cliente.value) {
        document.getElementById("resp").innerHTML = "Insira o ID do cliente!";
        cliente.focus();
        return;
      } else if (!produto.value) {
        document.getElementById("resp").innerHTML = "Insira o ID do produto!";
        produto.focus();
        return;
      } else {
        document.getElementById("resp").innerHTML = "Insira a data!";
        data.focus();
        return;
      }
    }
    const json = JSON.stringify({
      id: id.value,
      data: data.value,
      cliente: cliente.value,
      produto: produto.value,
      valor: valor.value,
    });

    fetch("http://localhost:8081/vendas", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: json,
    })
      // recebe a resposta da Promise e converte para JSON
      .then((response) => response.json())

      // esse parâmetro recebe o "response.json()" e pode ser usado pra manipula a resposta da Promise
      .then((data) => {
        console.log(data); //mandando a resposta pro console
        const inputs = document.querySelectorAll("input");
        inputs.forEach((input) => (input.value = "")); // Limpando todos os inputs com ForEach
        document.querySelector('input[name="produto"]').focus();

        document.getElementById("resp").innerHTML =
          "Venda realizada com sucesso!";
      })
      // parâmetro que vai dentro do bloco catch vai receber o erro da Promise
      .catch((error) => {
        console.error(error);
        document.getElementById("resp").innerHTML =
          "Erro ao realizar venda. Consulte o erro no Console";
      });
  });
});
