import listarAlbum from "./scripts/listarAlbum.js";

var botao = document.getElementById('botao');
botao.addEventListener('click', () => {
    var nome = document.getElementById('artista').value;
    listarAlbum(nome);
});

