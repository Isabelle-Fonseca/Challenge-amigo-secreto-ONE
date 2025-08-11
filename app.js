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

// função para atualizar a lista de amigos na tela
function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");

        let span = document.createElement("span");
        span.textContent = amigos[i];

        let btnRemover = document.createElement("button");
        btnRemover.textContent = "❌";
        btnRemover.classList.add("button-remove");
        btnRemover.onclick = function () {
            removerAmigo(i);
        };

        li.appendChild(span);
        li.appendChild(btnRemover);
        lista.appendChild(li);
    }
}