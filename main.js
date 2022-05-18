import listarMusica from "./scripts/listarMusica.js";

var botao = document.getElementById('botao');
botao.addEventListener('click', () => {
    var nome = document.getElementById('artista').value;
    listarMusica(nome);
});

