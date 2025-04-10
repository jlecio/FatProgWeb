//-- função galeria


function mostrarGaleria() {
    let imagens = ['labrador.jpg', 'bulldog.jpg', 'poodle.jpg', 'golden.jpg' ];
    let galeria = document.getElementById('galeria');
    imagens.forEach(img => {
    let imgElement = document.createElement('img');
    imgElement.src = 'img/'+ img;
    galeria.appendChild(imgElement);
    });
   }
   window.onload = mostrarGaleria;
   
   //------------------------------------
   function exibirRaca(raca) { //--função exibir raca
    let info = {
    'Labrador': 'Amigável, inteligente e energético.',
    'Bulldog': 'Calmo, dócil e sociável.',
    'Poodle': 'Extremamente inteligente e ativo.',
    'Golden' : 'Popular, amigavel e afetuoso'
    };
    document.getElementById('infoRaca').innerText = info[raca];
   }

//--------------------------------------------------------------
function pesquisarRaca() {// --- pesquisarRaça
    let pesquisa = document.getElementById('campoPesquisa').value.toLowerCase();
    let racas = ['labrador', 'bulldog', 'poodle', 'golden'];
    let resultado = racas.includes(pesquisa) ? 'Raça encontrada!' : 'Raça não encontrada';
    document.getElementById('resultadoPesquisa').innerText = resultado;
   }