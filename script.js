function expandirServico(element) {
    var servico = element;
    servico.classList.toggle('expandido');
  
    var servicos = document.querySelectorAll('.servico');
    servicos.forEach(function (outroServico) {
      if (outroServico !== servico && outroServico.classList.contains('expandido')) {
        outroServico.classList.remove('expandido');
      }
    });
  }
  