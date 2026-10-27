const btnCadastrar = document.getElementById("btnAbrirCadastro");
const btnCancelar = document.getElementById("btnCancelar");
const modal = document.getElementById("modalCadastro");
const form = document.getElementById("formDisco");
const lista = document.getElementById("listarJogos");
const mensagemVazia = document.getElementById("mensagemVazia");
btnCadastrar.addEventListener("click", () => {
    modal.showModal();
});
btnCancelar.addEventListener("click", () => {
    modal.close();
});
form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const nome = document.getElementById("Nome").value.trim();
    const criador = document.getElementById("Criador").value.trim();
    const genero = document.getElementById("Genero").value.trim();
    const imagem = document.getElementById("imagem").value.trim();
    const preco = Number(document.getElementById("preco").value);
    criarCard(nome, criador, genero, imagem, preco);
    form.reset();
    modal.close();
});

function criarCard(nome, criador, genero, imagem, preco) {
    mensagemVazia.hidden = true;
    const card = document.createElement("article");
    card.classList.add("card-disco");
    const capa = document.createElement("div");
    capa.classList.add("capa");
    const imagemCapa = document.createElement("img");
    imagemCapa.src = imagem;
    imagemCapa.alt = "Capa do jogo " + nome;
    imagemCapa.onerror = () => {
        imagemCapa.alt = "Imagem indisponível para " + nome;
    };
    capa.appendChild(imagemCapa);
    const info = document.createElement("div");
    info.classList.add("info-Jogo");
    const titulo = document.createElement("h3");
    titulo.textContent = nome;
    const nomeCriador = document.createElement("p");
    nomeCriador.textContent = "Criador: " + criador;
    const nomeGenero = document.createElement("p");
    nomeGenero.textContent = "Gênero: " + genero;
    const valor = document.createElement("strong");
    valor.classList.add("preco");
    valor.textContent = preco.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });

    info.append(titulo, nomeCriador, nomeGenero, valor);
    card.append(capa, info);
    lista.appendChild(card);
}