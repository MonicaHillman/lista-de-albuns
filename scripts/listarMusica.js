import getMusica from "./conexaoApi.js";

function imprimeMusica(album) {
    var elementoHTML = document.querySelector(".lista");

    elementoHTML.innerHTML =
        album.map((item) => `
    <li class="lista__item">
    <h2 class="item__titulo">${item.nome}</h1>
    <iframe style="border-radius:12px" src="https://open.spotify.com/embed/episode/${item.id}?utm_source=generator" width="50%" height="100%" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
    </li > `
        ).join("");
}


async function listarMusica(artista) {
    const musica = await getMusica(artista);
    imprimeMusica(musica);


}

export default listarMusica;