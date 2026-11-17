class Interface{

    constructor(){

    }
    static salvar(listaTurmas) {
      // 1. Impede o cadastro se não houver nenhuma turma no sistema
      if (!listaTurmas || listaTurmas.length === 0) {
        alert('Não é possível cadastrar um aluno sem antes cadastrar pelo menos uma turma!');
        Interface.alternarSubAba('turma'); // Redireciona automaticamente para o formulário de turma
        return null;
      }

      let indexTurma = document.getElementById('Turma').value;

      // 2. Impede o cadastro se nenhuma turma foi selecionada no dropdown
      if (indexTurma === "") {
        alert('Por favor, selecione uma turma para vincular o aluno.');
        return null;
      }

      let nome = document.getElementById('nome').value;
      let n1 = Number(document.getElementById('n1').value);
      let n2 = Number(document.getElementById('n2').value);
      let n3 = Number(document.getElementById('n3').value);

      // Validação dos campos do aluno
      if (!nome.trim()) {
        alert('Por favor, informe o nome do aluno.');
        return null;
      }

  let turmaSelecionada = listaTurmas[Number(indexTurma)];
  let a1 = new Aluno(nome, n1, n2, n3, turmaSelecionada);
  let m = a1.gerarMedia(n1, n2, n3);
  a1.gerarEstado(m);

  turmaSelecionada.adicionarAluno(a1);

  alert('Aluno cadastrado com sucesso!');
  return a1;
    }
    
static listar(listaAlunos) {
  const btnCadastrar = document.getElementById('btn-cadastrar');
  const tabCadastrar = document.getElementById('tab-cadastrar');
  const btnListar = document.getElementById('btn-listar');
  const tabListar = document.getElementById('tab-listar');

  btnListar.classList.add('active');
  btnCadastrar.classList.remove('active');

  tabListar.classList.add('active');
  tabCadastrar.classList.remove('active');

  let lista = '<table>';

  lista += `
      <tr>
          <th>Turma</th>
          <th>Curso</th>
          <th>Professor</th>
          <th>Nome</th>
          <th>Nota 1</th>
          <th>Nota 2</th>
          <th>Nota 3</th>
          <th>Média</th>
          <th>Situação</th>
          <th>Ação</th>
      </tr>
  `;

  for (let i = 0; i < listaAlunos.length; i++) {

      let aluno = listaAlunos[i];
      let turmaObj = aluno.getTurma();

      let nomeTurma = turmaObj ? turmaObj.getNomeT() : 'Sem Turma';
      let nomeCurso = turmaObj ? turmaObj.getCurso() : '-';

      // Recupera o professor associado à turma
      let professor = turmaObj ? turmaObj.getProfessor() : null;
      let nomeProfessor = professor ? professor.getNome() : '-';

      lista +=
          "<tr>" +
          "<td>" + nomeTurma + "</td>" +
          "<td>" + nomeCurso + "</td>" +
          "<td>" + nomeProfessor + "</td>" +
          "<td>" + aluno.getNome() + "</td>" +
          "<td>" + aluno.getNota1().toFixed(1) + "</td>" +
          "<td>" + aluno.getNota2().toFixed(1) + "</td>" +
          "<td>" + aluno.getNota3().toFixed(1) + "</td>" +
          "<td>" + aluno.getMedia().toFixed(1) + "</td>" +
          "<td>" + aluno.getEstado() + "</td>" +
          '<td><button onclick="editarAluno(' + i + ')">Editar</button></td>' +
          "</tr>";
  }

  lista += "</table>";

  document.getElementById('alunos').innerHTML = lista;
}

  
    static cadastrar() {
      const btnCadastrar = document.getElementById('btn-cadastrar');
      const tabCadastrar = document.getElementById('tab-cadastrar');

      const btnListar = document.getElementById('btn-listar');
      const tabListar = document.getElementById('tab-listar');
  
      btnListar.classList.remove('active');
      btnCadastrar.classList.add('active');
  
      // Ajusta o conteúdo visível
      tabListar.classList.remove('active');
      tabCadastrar.classList.add('active');
      //document.getElementById("media").innerHTML = m;
    }

    
  static salvarT() {
    let nomeT = document.getElementById('nomeT').value;
    let curso = document.getElementById('curso').value;
    let nomeProf = document.getElementById('prof').value;
    let formacao = document.getElementById('formacao').value;
    let estado = document.getElementById('estado').value;

    if (!nomeT.trim() || !curso.trim() ||
        !nomeProf.trim() || !formacao.trim() || !estado.trim()) {

        alert('Por favor, preencha todos os campos da turma.');
        return null;
    }

    let p = new Professor(nomeProf, formacao, estado);

    let t1 = new Turma(nomeT, curso, p);

    alert('Turma cadastrada com sucesso!');

    return t1;
  }

    static alternarSubAba(tipo) {
      const btnAluno = document.getElementById('btn-sub-aluno');
      const btnTurma = document.getElementById('btn-sub-turma');
      const subtabAluno = document.getElementById('subtab-aluno');
      const subtabTurma = document.getElementById('subtab-turma');
    
      if (tipo === 'aluno') {
        btnAluno.classList.add('active');
        btnTurma.classList.remove('active');
        subtabAluno.classList.add('active');
        subtabTurma.classList.remove('active');
      } else {
        btnTurma.classList.add('active');
        btnAluno.classList.remove('active');
        subtabTurma.classList.add('active');
        subtabAluno.classList.remove('active');
      }
    }

    static atualizarSelectTurmas(listaTurmas) {
      const select = document.getElementById('Turma');
  
      select.innerHTML = '<option value="">Selecione uma Turma</option>';
  
      listaTurmas.forEach((turma, index) => {
          const option = document.createElement('option');
  
          option.value = index;
          option.textContent = `${turma.getNomeT()} (${turma.getCurso()})`;
  
          select.appendChild(option);
      });
  }

  }//fim da classe