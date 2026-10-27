let turma = [];

function listar(){
    interface.listar(turma);
}

function salvar(){
    let a = Interface.salvar();
    turma.push(a);
    //turma[turma.length] = a1;
}