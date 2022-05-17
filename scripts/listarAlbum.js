import getAlbum from "./conexaoApi.js";

function imprimeAlbum(album) {
    var elementoHTML = document.querySelector(".lista");
    elementoHTML.innerHTML =
        album.map((item) => `
    <li class="lista__item">
    <img src=${item.imagem} class="item__imagem">
    <h2 class="item__titulo">${item.nome}</h1>
    </li>`
        ).join("");
}

async function listarAlbum(artista) {
    const album = await getAlbum(artista);
    imprimeAlbum(album);
}

export default listarAlbum;