class Turma {
    #nomeT
    #curso;
    #professor;
    #alunos;

    constructor(nomeT, curso, professor, alunos = []) {
      this.#nomeT = nomeT;
      this.#curso = curso;
      this.#professor = professor;
      this.#alunos = alunos;
    }

    // Método utilitário para adicionar alunos um por um
    adicionarAluno(aluno) {
        this.#alunos.push(aluno);
    }
    
    // Getters
    getNomeT(){return this.#nomeT;}
    getCurso(){return this.#curso;}
    getProfessor(){return this.#professor;}
    getAluno(){return this.#alunos;}
    
    // Setters
    setNomeT(nomeT){this.#nomeT = nomeT;}
    setCurso(curso){this.#curso = curso;}
    setProfessor(professor){this.#professor = professor;}
    setAluno(alunos){this.#alunos = alunos;}

} //fim da classe