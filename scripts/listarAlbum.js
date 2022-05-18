import getAlbum from "./conexaoApi.js";

function imprimeAlbum(album) {
    var elementoHTML = document.querySelector(".lista");

    elementoHTML.innerHTML =
        album.map((item) => `
    <li class="lista__item">
    <h2 class="item__titulo">${item.nome}</h1>
    <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/${item.id}?utm_source=generator" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
    </li > `
        ).join("");
}


async function listarAlbum(artista) {
    const album = await getAlbum(artista);
    imprimeAlbum(album);


}

export default listarAlbum;