document.addEventListener("DOMContentLoaded", () => {
  const listar = document.querySelector("listar");

  fetch("http://localhost:8081/produto")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((cliente) => {
        const div = document.createElement("div");
        const id = document.createElement("h2");
        const Codigo = document.createElement("h2");
        const Nome = document.createElement("h2");
        const Marca = document.createElement("h2");
        const Valor = document.createElement("h2");

        id.textContent = `ID: ${cliente.id}`;
        Codigo.textContent = `Codigo: ${cliente.Codigo}`;
        Nome.textContent = `Nome: ${cliente.Nome}`;
        Marca.textContent = `Marca: ${cliente.Marca}`;
        Valor.textContent = `Valor: ${cliente.Valor}`;

        div.appendChild(id);
        div.appendChild(Codigo);
        div.appendChild(Nome);
        div.appendChild(Marca);
        div.appendChild(Valor);

        document.createElement("hr");
        div.appendChild(document.createElement("hr"));
        listar.appendChild(div);
      });
    })
    .catch((error) => console.log(error));
});
