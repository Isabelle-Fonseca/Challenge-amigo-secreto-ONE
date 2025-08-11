let amigos = [];

// função para adicionar amigo
function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    if (amigos.some(a => a.toLowerCase() === nome.toLowerCase())) {
        alert("Esse nome já foi adicionado.");
        input.value = "";
        return;
    }

    amigos.push(nome);

    atualizarLista();

    input.value = "";
}