let turma = [];

function listarAluno(){
    Interface.listar(turma);
}

function btnSalvar(){
    let a = Interface.salvar();
    turma.push(a);
    //turma[turma.length] = a1;
}

function cadastroAluno(){
    Interface.cadastrar()
}

function editarAluno(index) {
    alunoEditandoIndex = index;
    const aluno = turma[index];
  
    // Carrega os dados do aluno nos inputs da tela
    document.getElementById('nome').value = aluno.getNome();
    document.getElementById('n1').value = aluno.nota1;
    document.getElementById('n2').value = aluno.nota2;
    document.getElementById('n3').value = aluno.nota3;
  
    // Alterna para a aba de cadastro/edição
    Interface.cadastrar();
  }