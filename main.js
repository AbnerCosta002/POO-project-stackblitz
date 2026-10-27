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