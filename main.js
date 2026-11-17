let listaAlunos = [];
let listaTurmas = [];
let alunoEditandoIndex = null;

function listarAluno() {
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
    // Verifica se existe pelo menos uma turma cadastrada
    if (listaTurmas.length === 0) {
        alert('Cadastre pelo menos uma turma antes de cadastrar ou editar alunos!');
        Interface.alternarSubAba('turma');
        return;
    }

    // Captura os dados do formulário
    let nome = document.getElementById('nome').value.trim();
    let n1 = Number(document.getElementById('n1').value);
    let n2 = Number(document.getElementById('n2').value);
    let n3 = Number(document.getElementById('n3').value);
    let indexTurma = document.getElementById('Turma').value;

    // Valida o nome
    if (nome === '') {
        alert('Por favor, informe o nome do aluno!');
        return;
    }

    // Valida as notas
    if (
        document.getElementById('n1').value === '' ||
        document.getElementById('n2').value === '' ||
        document.getElementById('n3').value === '' ||
        !Number.isFinite(n1) ||
        !Number.isFinite(n2) ||
        !Number.isFinite(n3) ||
        n1 < 0 || n1 > 10 ||
        n2 < 0 || n2 > 10 ||
        n3 < 0 || n3 > 10
    ) {
        alert('Informe notas válidas entre 0 e 10!');
        return;
    }

    // Valida a turma selecionada
    if (indexTurma === '') {
        alert('Por favor, selecione uma turma!');
        return;
    }

    let turmaSelecionada = listaTurmas[Number(indexTurma)];

    if (!turmaSelecionada) {
        alert('A turma selecionada não é válida!');
        return;
    }

    // Verifica se está editando um aluno
    if (alunoEditandoIndex !== null) {
        let aluno = listaAlunos[alunoEditandoIndex];

        if (!aluno) {
            alert('Aluno não encontrado!');
            alunoEditandoIndex = null;
            return;
        }

        // Guarda a turma antiga do aluno
        let turmaAntiga = aluno.getTurma();

        // Atualiza os dados do aluno
        aluno.setNome(nome);
        aluno.setNota1(n1);
        aluno.setNota2(n2);
        aluno.setNota3(n3);

        // Se a turma mudou, atualiza as listas das turmas
        if (turmaAntiga !== turmaSelecionada) {
            if (turmaAntiga) {
                turmaAntiga.removerAluno(aluno);
            }

            turmaSelecionada.adicionarAluno(aluno);
            aluno.setTurma(turmaSelecionada);
        }

        // Recalcula a média e o estado do aluno
        let m = aluno.gerarMedia(n1, n2, n3);
        aluno.gerarEstado(m);

        alert('Aluno alterado com sucesso!');

        alunoEditandoIndex = null;

    } else {
        // Cadastra um novo aluno
        let a = Interface.salvar(listaTurmas);

        if (!a) {
            return;
        }

        listaAlunos.push(a);
    }

    // Limpa os campos do formulário
    document.getElementById('nome').value = '';
    document.getElementById('n1').value = '';
    document.getElementById('n2').value = '';
    document.getElementById('n3').value = '';
    document.getElementById('Turma').value = '';

    // Atualiza a tabela de alunos
    listarAluno();
}

  function btnSalvarTurma() {
    let novaTurma = Interface.salvarT();

    if (novaTurma) {
        listaTurmas.push(novaTurma);
        Interface.atualizarSelectTurmas(listaTurmas);

        document.getElementById('nomeT').value = '';
        document.getElementById('curso').value = '';
        document.getElementById('prof').value = '';
        document.getElementById('formacao').value = '';
        document.getElementById('estado').value = '';
    }
  }

  function mostrarSubAba(tipo) {
    Interface.alternarSubAba(tipo);
  }