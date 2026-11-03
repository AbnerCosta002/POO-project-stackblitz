let listaAlunos = [];
let listaTurmas = [];
let alunoEditandoIndex = null;

function listarAluno(){
    Interface.listar(listaAlunos);
}

function cadastroAluno(){
    Interface.cadastrar()
}

function editarAluno(index) {
    alunoEditandoIndex = index;
    const aluno = listaAlunos[index];
  
    // Carrega os dados do aluno nos inputs da tela
    document.getElementById('nome').value = aluno.getNome();
    document.getElementById('n1').value = aluno.getNota1();
    document.getElementById('n2').value = aluno.getNota2();
    document.getElementById('n3').value = aluno.getNota3();
  
    // Seleciona no dropdown a turma atual do aluno
  const selectTurma = document.getElementById('Turma');
  if (aluno.getTurma()) {
    const turmaIndex = listaTurmas.indexOf(aluno.getTurma());
    selectTurma.value = turmaIndex !== -1 ? turmaIndex : "";
  } else {
    selectTurma.value = "";
  }

  Interface.cadastrar();
  }

  function btnSalvar() {
    let nome = document.getElementById('nome').value;
    let n1 = Number(document.getElementById('n1').value);
    let n2 = Number(document.getElementById('n2').value);
    let n3 = Number(document.getElementById('n3').value);
    let indexTurma = document.getElementById('Turma').value;

    let turmaSelecionada = indexTurma !== "" ? listaTurmas[indexTurma] : null;
  
    if (alunoEditandoIndex !== null) {
      // Modo Edição: atualiza o aluno existente
      let aluno = listaAlunos[alunoEditandoIndex];
      aluno.setNome(nome);
      aluno.setNota1(n1);
      aluno.setNota2(n2);
      aluno.setNota3(n3);
      aluno.setTurma(turmaSelecionada);

      // Recalcula a média e o estado
      let m = aluno.gerarMedia(n1, n2, n3);
      aluno.gerarEstado(m);
  
      alert('Aluno alterado com sucesso!');
      alunoEditandoIndex = null; // Reseta o estado para modo de novo cadastro
    } else {
      // Modo Novo Cadastro
      let a = Interface.salvar(listaTurmas);
      if (a) {
        listaAlunos.push(a);
        alert('Aluno cadastrado com sucesso!');
      }
    }
  
    // Limpa o formulário
    document.getElementById('nome').value = '';
    document.getElementById('n1').value = '';
    document.getElementById('n2').value = '';
    document.getElementById('n3').value = '';
    document.getElementById('Turma').value = '';
  }

  function btnSalvarTurma() {
    let novaTurma = Interface.salvarT();
    if (novaTurma) {
      listaTurmas.push(novaTurma);
      Interface.atualizarSelectTurmas(listaTurmas);

      // Limpa o formulário da turma
      document.getElementById('nomeT').value = '';
      document.getElementById('curso').value = '';
      document.getElementById('prof').value = '';
    }
  }