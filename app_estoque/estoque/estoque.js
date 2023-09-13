let produtos = Array();

let adicionar_produto = (p)=>{
    produtos.push(p);
}
let criar_produto = (id, nome, qtd) => ({   
        id: id,
        nome: nome,
        qtd: qtd
});

let listar_produtos = () => {
    return produtos;
};

let editar_produto = (id, qtdAtual) => {
    let pEditado = null;
    produtos.forEach(p => {
        if(p.id == id){
            p.qtd = qtdAtual;
            pEditado = p;
        }
    })
    return pEditado;
}
let remover_produto = (id) => {
    produtos = produtos.filter((p) => { return p.id != id });
}

module.exports = {
    adicionar_produto, criar_produto, listar_produtos, editar_produto, remover_produto
}