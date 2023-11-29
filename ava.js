document.getElementById('gerarAvaliacoes').addEventListener('click', function() {
    const nomes = ['Maria', 'João', 'Ana', 'Pedro', 'Carla', 'Fábio', 'Renato', 'André', 'Natalie', 'Larissa','Ziggs', 'Ananda', 'Carlos', 'Marina', 'Lezir', 'Renata', 'Samira', 'Fabiano', 'Claudio', 'Edison', 'Haroldo']; // Lista de nomes para as avaliações
    const comentarios = [
      'Ótimo produto!',
      'Um ótimo valor.',
      'Gostei bastante.',
      'Excelente!',
      'Devo pedir novamente em breve!',
      'O melhor custo benefício!',
      'Simplesmente o melhor.',
      'A concorrência nem tem chance!',
    ];

    const gerarAvaliacoes = function() {
      const numAvaliacoes = 5; 
      const avaliacoesUl = document.getElementById('avaliacoes');
      avaliacoesUl.innerHTML = ''; 

      for (let i = 0; i < numAvaliacoes; i++) {
        const nomeAleatorio = nomes[Math.floor(Math.random() * nomes.length)];
        const comentarioAleatorio = comentarios[Math.floor(Math.random() * comentarios.length)]; 
        const avaliacao = Math.floor(Math.random() * 2) + 4;
        const estrelas = '★'.repeat(avaliacao) + '☆'.repeat(5 - avaliacao); 

        const avaliacaoElement = document.createElement('li');
        avaliacaoElement.innerHTML = `<strong>${nomeAleatorio}</strong> avaliou com ${estrelas}. Comentário: ${comentarioAleatorio}`;
        avaliacoesUl.appendChild(avaliacaoElement);
      }
    };

    gerarAvaliacoes();
  });