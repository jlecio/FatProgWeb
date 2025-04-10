function mostraGaleria(){
    let imagens = let imagens = ['labrador.jpg', 'bulldog.jpg', 'poodle.jpg'];
    let galeria = document.getElementById('galeria');
    imagens.forEach(img=>{
        let imgElement = document.createElement('img');
        imgElement.src = '../'+img;
        galeria.appendChild(imgElement);
    });
}
document.onload=mostraGaleria();

function exibirRaca(raca){

    let info = {
        'Labrador': 'Amigável, inteligente e energético.',
        'Poodle': 'Inteligente, leal e fácil de treinar.',
        'Buldog': 'Extremamente inteligente e ativo'
    };
    document.getElementById('infoRaca').innerText=info[raca];
}

function pesquisarRaca(){
    let pesquisa = document.getElementById('campoPesquisa').value.toLowerCase();
    let racas= ['labrador', 'bulldog', 'puddle'];
    let resultado = racas.includes(pequisa)?'Raça encontrada!':'Raça não encontrada' ;
    document.getElementById('resultadoPesquisa').innerText = resultado;
}
