async function getAlbum(endpoint) {
    const API_URL = `https://spotify23.p.rapidapi.com/search/?q=${endpoint}&type=tracks&offset=0&limit=10&numberOfTopResults=5`
    const dadosAlbum = [];
    try {
        const listaAlbuns = await fetch(API_URL, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Host': 'spotify23.p.rapidapi.com',
                'X-RapidAPI-Key': '0fe4ecb75emsh5f15495633408afp1c51c8jsn0319590f973a'
            }
        })
        const listaAlbunsConvertido = await listaAlbuns.json();

        console.log(listaAlbunsConvertido);
        const dados = await listaAlbunsConvertido.tracks.items;

        for (var i = 0; i != dados.length; i++) {
            dadosAlbum.push({
                nome: dados[i].data.name,
                id: dados[i].data.id,
            })
        }
        return dadosAlbum;
    }


    catch (e) {
        dadosAlbum.push({
            nome: "não encontrado",
            id: "imagem não encontrada"
        })
        return dadosAlbum;
    }
}


export default getAlbum;