class Aluno {
  #nome;
  #nota1;
  #nota2;
  #nota3;
  #estado;
  #media;
  constructor(nome, nota1, nota2, nota3) {
    this.#nome = nome;
    this.#nota1 = nota1;
    this.#nota2 = nota2;
    this.#nota3 = nota3;
  }
  gerarMedia(nota1, nota2, nota3) {
    let m = (nota1 + nota2 + nota3) / 3;
    this.#media = m;
    return m;
  }
  gerarEstado(media) {
    let est;
    if (media >= 6) {
      est = 'Aprovado';
    } else if (media >= 3) {
      est = 'Recuperação';
    } else {
      est = 'Reprovado';
    }
    this.#estado = est;
    return est;
  }

  // Getters
  getNome(){return this.#nome;}
  getNota1(){return this.#nota1;}
  getNota2(){return this.#nota2;}
  getNota3(){return this.#nota3;}
  getMedia(){return this.#media;}
  getEstado(){return this.#estado;}

  // Setters
  setNome(nome){this.#nome = nome;}
  setNota1(nota1){this.#nota1 = nota1;}
  setNota2(nota2){this.#nota2 = nota2;}
  setNota3(nota3){this.#nota3 = nota3;}
  setMedia(media){this.#media = media;}
  setEstado(estado){this.#estado = estado;}
 
} //fim da classe
