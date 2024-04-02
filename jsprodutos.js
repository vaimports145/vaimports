//__________Menu__________//

function openNav() {
 	document.getElementById("mySidenav").style.width = "50%";
 	var imagens = document.getElementById('slides');
}
function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
 	var imagens = document.getElementById('slides');
}

//__________Buscar produtos__________//

document.getElementById('campopesquisa').addEventListener('keyup', function(event) {
	if (event.keyCode === 13) {
		buscar();
    }
});
    
function buscar() {
	var termoBusca = document.getElementById('campopesquisa').value.trim();
	if (termoBusca !== '') {
    	window.location.href = 'produtos.html?termo=' + encodeURIComponent(termoBusca);
  	}
}

//__________Buscar categorias__________//

function categorias() {
    var elementoCategoria = event.target.closest('.tudojunto').querySelector('.nomecategoria');
    var textoCategoria = elementoCategoria.innerText;
    window.location.href = 'produtos.html?termo=' + encodeURIComponent(textoCategoria);
}

function categoriastopo() {
  var selecionado = document.getElementById("category");
  var textoSelecionado = selecionado.options[selecionado.selectedIndex].text;
  if (textoSelecionado.trim() !== "") {
    window.location.href = 'produtos.html?termo=' + encodeURIComponent(textoSelecionado);
  }
}

function categoriasmenu(categoria) {
  if (categoria !== "") {
    window.location.href = 'produtos.html?termo=' + categoria;
  }
}	
  
//Função para recuperar o termo de busca da URL
function getTermoBusca() {
  var urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('termo');
}

//Função para exibir os resultados da busca
function exibirResultados() {
  var termoBusca = getTermoBusca();
  if (termoBusca) {
  document.getElementById('produtopesquisado').textContent = 'Resultados para: ' + decodeURIComponent(termoBusca);
    // Filtrar os produtos com base no termo de busca
    var produtos = document.querySelectorAll('.produto');
    produtos.forEach(function(produto) {
      var nomeProduto = produto.getAttribute('data-name').toLowerCase();
      if (nomeProduto.includes(termoBusca.toLowerCase())) {
        produto.style.display = 'block';
      }else {produto.style.display ='none';
      }
    });
    // Exibir mensagem se nenhum produto corresponder à busca
    var resultadosDiv = document.getElementById('produtos');
    if (resultadosDiv.innerHTML === '') {
      resultadosDiv.textContent = 'Nenhum produto encontrado para: ' + decodeURIComponent(termoBusca);
    }
  }
}

//seta voltar
function goBack() {
  window.history.back();
}


// Chama a função para exibir os resultados da busca quando a página carrega
window.onload = exibirResultados;
