// script.js

function trocarImagem(element, novaImagem) {
    var imagemProduto = element.querySelector('img');
    var imagemAtual = imagemProduto.src;
  
    // Verifica se a imagem atual é a imagem original
    if (imagemAtual.includes('produto1.png')) {
      // Se for, troca para a nova imagem
      imagemProduto.src = 'img/prod/' + novaImagem;
    } else {
      // Se não for, volta para a imagem original
      imagemProduto.src = 'img/prod/produto1.png';
    }
  }
  