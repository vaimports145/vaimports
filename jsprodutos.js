window.onload = function() {
	var listaProdutos = JSON.parse(localStorage.getItem('listaProdutos')) || [];
	document.querySelector('.quanticar').textContent = listaProdutos.length;
}

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

// Verifica se o termo na URL corresponde a algum produto
function verificarTermoNaUrl() {
    // Obtém o termo da URL
    var url = new URL(window.location.href);
    var termo = url.searchParams.get("termo");

    // Obtém todos os elementos com a classe 'produto'
    var produtos = document.getElementsByClassName("produto");

    // Define uma variável para verificar se há correspondência
    var correspondencia = false;

    // Verifica se o termo corresponde a algum produto
    for (var i = 0; i < produtos.length; i++) {
        var nomeProduto = produtos[i].getAttribute("data-name").toLowerCase();
        if (nomeProduto.includes(termo.toLowerCase())) {
            correspondencia = true;
            break;
        }
    }

    // Se não houver correspondência, exibe um aviso
    if (!correspondencia) {
        alert("Nenhum produto corresponde ao termo de busca.");
    }
}

// Chama a função ao carregar a página
window.onload = verificarTermoNaUrl;

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
  }
}

//seta voltar
function goBack() {
  window.history.back();
}


// Chama a função para exibir os resultados da busca quando a página carrega
window.onload = exibirResultados;
