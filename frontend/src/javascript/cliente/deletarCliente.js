const deleta = document.forms.formDeletar;

deleta.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const { id } = deleta;
  const json = { id: id.value };

  fetch(`http://localhost:8081/clientes/${id.value}`, {
    method: "delete",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(json),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erro ao deletar cliente");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      id.value = "";
      id.focus();
      document.getElementById("resp").innerHTML =
        "Cliente deletado com sucesso!";
    })
    .catch((error) => {
      console.log(error);
      document.getElementById("resp").innerHTML = "Erro ao deletar!";
    });
});
