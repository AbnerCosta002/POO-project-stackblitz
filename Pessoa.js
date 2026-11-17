class Pessoa {
    #nome;
    #matricula;
    #estado;

    constructor(nome) {
        this.#nome = nome;
        this.#matricula = Math.floor(Math.random() * 1000);
    }
    
    // Getters
    getNome(){return this.#nome;}
    getMatricula(){return this.#matricula;}
    getEstado(){return this.#estado;}
    
    // Setters
    setNome(nome){this.#nome = nome;}
    setMatricula(matricula){this.#matricula = matricula;}
    setEstado(estado){this.#estado = estado;}

} //fim da classe