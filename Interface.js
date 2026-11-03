class Interface{

    constructor(){

    }
    static salvar(listaTurmas) {
      let nome = document.getElementById('nome').value;
      let n1 = Number(document.getElementById('n1').value);
      let n2 = Number(document.getElementById('n2').value);
      let n3 = Number(document.getElementById('n3').value);
      let indexTurma = document.getElementById('Turma').value;
    
      // Obtém o objeto Turma correspondente ao índice selecionado no dropdown
      let turmaSelecionada = indexTurma !== "" ? listaTurmas[Number(indexTurma)] : null;
    
      // Cria o aluno já com a turma vinculada
      let a1 = new Aluno(nome, n1, n2, n3, turmaSelecionada);
      let m = a1.gerarMedia(n1, n2, n3);
      a1.gerarEstado(m);
    
      // Adiciona o aluno à lista interna da turma, se ela existir
      if (turmaSelecionada) {
        turmaSelecionada.adicionarAluno(a1);
      }
    
      alert('Aluno cadastrado com sucesso!');
      return a1;
    }
    static listar(turma) {
      const btnCadastrar = document.getElementById('btn-cadastrar');
      const tabCadastrar = document.getElementById('tab-cadastrar');
      const btnListar = document.getElementById('btn-listar');
      const tabListar = document.getElementById('tab-listar');
  
      btnListar.classList.add('active');
      btnCadastrar.classList.remove('active');
  
      // Ajusta o conteúdo visível
      tabListar.classList.add('active');
      tabCadastrar.classList.remove('active');
      let lista = '<table>';
      lista += "<tr><th>Turma</th> <th>Curso</th> <th>Nome</th> <th>Nota 1</th> <th>Nota 2</th> <th>Nota 3</th> <th>Média</th> <th>Situação</th> <th>Ação</th></tr>";
      for (let i = 0; i < turma.length; i++) {
        let aluno = listaAlunos[i];
        let turmaObj = aluno.getTurma();
    
        // 2. Extrai o nome da turma e do curso em segurança
        let nomeTurma = turmaObj ? turmaObj.getNomeT() : 'Sem Turma';
        let nomeCurso = turmaObj ? turmaObj.getCurso() : '-';
        
        lista =
          lista +
          "<tr>"+
          "<td>" + nomeTurma + "</td>" +
          "<td>" + nomeCurso + "</td>" +
          "<td>"+turma[i].getNome() + "</td>"+
          "<td>"+turma[i].getNota1().toFixed(1) + "</td>"+
          "<td>"+turma[i].getNota2().toFixed(1) + "</td>"+
          "<td>"+turma[i].getNota3().toFixed(1) + "</td>"+
          "<td>"+turma[i].getMedia().toFixed(1) + "</td>"+
          "<td>"+turma[i].getEstado() + "</td>" +
          '<td><button onclick="editarAluno(' + i + ')">Editar</button></td>'+
          '</tr>';
      }
      lista += "</table>"
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
      let prof = document.getElementById('prof').value;

      if (!nomeT || !curso || !prof) {
        alert('Por favor, preencha todos os campos da turma.');
        return null;
      }
  
      let t1 = new Turma(nomeT, curso, prof);
      alert('Turma cadastrada com sucesso!');
      return t1;
    }

    static atualizarSelectTurmas(listaTurmas) {
      const select = document.getElementById('Turma');
      select.innerHTML = '<option value="">Selecione uma Turma</option>';
  
      listaTurmas.forEach((turma, index) => {
        const option = document.createElement('option');
        option.value = index; // Armazena o índice da turma no array
        option.textContent = `${turma.getNomeT()} (${turma.getCurso()})`;
        select.appendChild(option);
      });
    }

  }//fim da classe