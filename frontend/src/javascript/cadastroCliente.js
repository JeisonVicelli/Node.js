const criar = document.getElementById('criar');

criar.addEventListener('click', (e) => {
    e.preventDefault();

    const id = document.querySelector('input[name="id"]');
    const nome = document.querySelector('input[name="Nome"]');
    const Telefone = document.querySelector('input[name="Telefone"]');
    const DataNascimento = document.querySelector('input[name="DataNascimento"]');
    const CPF = document.querySelector('input[name="CPF"]');

    if(!id.value || !nome.value || !Telefone.value || !DataNascimento.value || !CPF.value){
        if(!id.value){
            document.getElementById('res').innerHTML = "Insira o ID";
            id.focus();
            return;
        } else if(!nome.value){
            document.getElementById('res').innerHTML = "Insira o nome";
            nome.focus();
            return;
        } else if(!CPF.value){
            document.getElementById('res').innerHTML = "Insira o cpf";
            CPF.focus();
            return;
        }else if(!Telefone.value){
            document.getElementById('res').innerHTML = "Insira o telefone";
            Telefone.focus();
            return;
        } else {
            document.getElementById('res').innerHTML = "Insira o Data de nascimento";
            DataNascimento.focus();
            return;
        }
    }
    document.getElementById('res').innerHTML = "Funcionou";

    const formCliente = document.getElementById("Cliente");
    const formClientePronto = new FormData(formCliente);

    const json = JSON.stringify(Object.fromEntries(formClientePronto));

    fetch('http://localhost:8081/clientes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: json
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const inputs = document.querySelectorAll('input');
        inputs.forEach(input => input.value = "");
        id.focus();
        document.getElementById('res').innerHTML = "Cadastrado com sucesso!";
    })
    .catch(erro => {
        console.log(erro);
        document.getElementById('res').innerHTML = "Erro ao cadastrar";
    });
});
