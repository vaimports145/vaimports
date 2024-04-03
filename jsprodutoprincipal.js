window.onload = function() {
	var listaProdutos = JSON.parse(localStorage.getItem('listaProdutos')) || [];
    document.querySelector('.quanticar').textContent = listaProdutos.length;
}

//_____Rolagem no celular_____//

$(document).ready(function(){
	if ($(window).width() < 700) {
		$("#produtos").on("swipeleft", function(){
        	$(this).animate({scrollLeft: '+=' + $(window).width()}, 'slow');
      	});
      
      	$("#produtos").on("swiperight", function(){
        	$(this).animate({scrollLeft: '-=' + $(window).width()}, 'slow');
      	});
      
      	$("#tabelabolas").on("swipeleft", function(){
       		$(this).animate({scrollLeft: '+=' + $(window).width()}, 'slow');
      	});
      
      	$("#tabelabolas").on("swiperight", function(){
        	$(this).animate({scrollLeft: '-=' + $(window).width()}, 'slow');
      	});
    }
});

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
    
//__________Fixar infor-produto__________//

window.addEventListener('scroll', function() {
    if (window.innerWidth >= 700) {
        var infobox = document.querySelector('.inforproduto-principal');
        var produtoPrincipal = document.querySelector('.produto-principal');
        var footer = document.querySelector('.limite');
        var windowHeight = window.innerHeight;
        var infoboxHeight = infobox.offsetHeight;
        var produtoPrincipalBottom = produtoPrincipal.offsetTop + produtoPrincipal.offsetHeight;
        var footerTop = footer.offsetTop;

        // Calcula a posição onde o infobox deve parar de ser fixo
        var stopPosition = footerTop - infoboxHeight;

        // Verifica se a janela foi rolada o suficiente para que o .inforproduto-principal fique fixo
        if (window.scrollY > produtoPrincipal.offsetTop && window.scrollY < stopPosition) {
            infobox.style.position = 'fixed';
            infobox.style.top = '0';
            infobox.style.right = '0';
        } else if (window.scrollY >= stopPosition) {
            infobox.style.position = 'absolute';
            infobox.style.top = (footerTop - infoboxHeight) + 'px';
            infobox.style.right = '0'; // Garante que o .inforproduto-principal fique alinhado à direita quando absolutamente posicionado
        } else {
            infobox.style.position = 'static';
        }
    }
});

//__________Miniaturas__________//

function mudarImagemCor(novaImagemURL) {
        document.getElementById('imagemproduto').src = novaImagemURL;
}

function mudarImagem(novaImagem) {
  document.getElementById('imagemproduto').src = novaImagem;
}

//__________Carrinho__________//

function salvarDados() {
    // Obter os elementos necessários
    var imagemProduto = document.getElementById('imagemproduto').src;
    var nomeProduto = document.querySelector('.nomeproduto-principal').innerText;
    var precoProduto = document.querySelector('.precoproduto-principal').innerText;

    // Obter a lista de produtos do armazenamento local ou inicializá-la como um array vazio
    var listaProdutos = JSON.parse(localStorage.getItem('listaProdutos')) || [];

    // Criar um objeto representando o produto
    var novoProduto = {
        imagem: imagemProduto,
        nome: nomeProduto,
        preco: precoProduto
    };

    // Adicionar o novo produto à lista de produtos
    listaProdutos.push(novoProduto);

    // Salvar a lista de produtos atualizada no armazenamento local
    localStorage.setItem('listaProdutos', JSON.stringify(listaProdutos));

    alert('Produto adicionado ao carrinho!');
    
    $('.quanticar').text(listaProdutos.length);
}

//__________Url termo__________//

function buscar() {
  var termoBusca = document.getElementById('campopesquisa').value.trim();
  if (termoBusca !== '') {
    // Redireciona para a página de destino com o termo de busca como parâmetro na URL
    window.location.href = 'produtos.html?termo=' + encodeURIComponent(termoBusca);
  }
}
