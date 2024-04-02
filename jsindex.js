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

function categorias() {
    var elementoCategoria = event.target.closest('.tudojunto').querySelector('.nomecategoria');
    var textoCategoria = elementoCategoria.innerText;
    window.location.href = 'produtos.html?termo=' + encodeURIComponent(textoCategoria);
}

function categoriastopo() {
  var selecionado = document.getElementById("category").value;
  if (selecionado !== "") {
    window.location.href = 'produtos.html?termo=' + selecionado;
  }
}

function categoriasmenu(categoria) {
  if (categoria !== "") {
    window.location.href = 'produtos.html?termo=' + categoria;
  }
}
