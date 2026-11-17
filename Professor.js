class Professor extends Pessoa {
    #formacao;
    #email

    constructor(nome, formacao, email) {
        super(nome);
        this.#formacao = formacao;
        this.#email = email;
    }
    
    // Getters
    getFormacao(){return this.#formacao;}
    getEmail(){return this.#email;}
    
    // Setters
    setFormacao(formacao){this.#formacao = formacao;}
    setEmail(email){this.#email = email;}

} //fim da classe