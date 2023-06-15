document.addEventListener("DOMContentLoaded", () => {
  const lista = document.querySelector("#lista");

  fetch("http://localhost:8081/produtos")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((produto) => {
        const div = document.createElement("div");
        const id = document.createElement("h2");
        const Codigo = document.createElement("h2");
        const Nome = document.createElement("h2");
        const Marca = document.createElement("h2");
        const Valor = document.createElement("h2");

        id.textContent = `ID: ${produto.id}`;
        Codigo.textContent = `Codigo: ${produto.Codigo}`;
        Nome.textContent = `Nome: ${produto.Nome}`;
        Marca.textContent = `Marca: ${produto.Marca}`;
        Valor.textContent = `Valor: ${produto.Valor}`;

        div.appendChild(id);
        div.appendChild(Codigo);
        div.appendChild(Nome);
        div.appendChild(Marca);
        div.appendChild(Valor);

        lista.appendChild(div);
        lista.appendChild(document.createElement("hr"));
      });
    })
    .catch((error) => console.log(error));
});
