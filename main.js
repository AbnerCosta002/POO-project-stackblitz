let turma = [];
let alunoEditandoIndex = null;

function listarAluno(){
    Interface.listar(turma);
}

function cadastroAluno(){
    Interface.cadastrar()
}

function editarAluno(index) {
    alunoEditandoIndex = index;
    const aluno = turma[index];
  
    // Carrega os dados do aluno nos inputs da tela
    document.getElementById('nome').value = aluno.getNome();
    document.getElementById('n1').value = aluno.getNota1();
    document.getElementById('n2').value = aluno.getNota2();
    document.getElementById('n3').value = aluno.getNota3();
  
    // Alterna para a aba de cadastro/edição
    Interface.cadastrar();
  }

  function btnSalvar() {
    let nome = document.getElementById('nome').value;
    let n1 = Number(document.getElementById('n1').value);
    let n2 = Number(document.getElementById('n2').value);
    let n3 = Number(document.getElementById('n3').value);
  
    if (alunoEditandoIndex !== null) {
      // Modo Edição: atualiza o aluno existente
      let aluno = turma[alunoEditandoIndex];
      aluno.setNome(nome);
      aluno.setNota1(n1);
      aluno.setNota2(n2);
      aluno.setNota3(n3);

      // Recalcula a média e o estado
      let m = aluno.gerarMedia(n1, n2, n3);
      aluno.gerarEstado(m);
  
      alert('Aluno alterado com sucesso!');
      alunoEditandoIndex = null; // Reseta o estado para modo de novo cadastro
    } else {
      // Modo Novo Cadastro
      let a = Interface.salvar();
      turma.push(a);
      alert('Aluno cadastrado!');
    }
  
    // Limpa o formulário
    document.getElementById('nome').value = '';
    document.getElementById('n1').value = '';
    document.getElementById('n2').value = '';
    document.getElementById('n3').value = '';
  }