const readlineSync = require('readline-sync');

const bancoIngredientes = [
    {id: 1, nome: '5 Queijos', descricao: 'Catupiry, Cheddar, Muçarela, Parmesão, Provolone'},
    {id: 2, nome: 'Alicatra Acebolada', descricao: 'Alcatra, cebola assada na manteiga, Molho, Muçarela, Orégano'},
    {id: 3, nome: 'Alicatra ao Barbeque', descricao: 'Alcatra ao Barbecue, Catupiry, Molho, Molho Barbecue, Muçarela, Orégano'},
    {id: 4, nome: 'Atum', descricao: 'Atum Sólido, Molho, Muçarela, Orégano'},
    {id: 5, nome: 'Bacon', descricao: 'Bacon, Molho, Muçarela, Orégano'}
];

const bancoTamanhoPizza = [
    {id: 'p', pizza: 'Pequena', valor: 80},
    {id: 'm', pizza: 'Media', valor: 90},
    {id: 'g', pizza: 'Grande', valor: 115}
];

const pedidos = [];

function fazerPedido () {

    const nomeCliente = readlineSync.question("Nome do cliete: ");
    const itemPedido = readlineSync.questionInt("Item pedido: ");
    const observacoes = readlineSync.question("Observações (opcional): ");
    const pizzaTamanho = readlineSync.question("Tamanho Pizza (P, M, G): ").toLowerCase();

    const tamanhoPizza = bancoTamanhoPizza.find(item => item.id === pizzaTamanho);
    if (!tamanhoPizza) {
        console.log(`\nTamanho de pizza inválido. Escolha entre P, M ou G.\n`);
        return fazerPedido();
    }
    
    if(nomeCliente === ''){
        console.log(`Preencha o Nome :)\n`);
        return fazerPedido();
    }

    const pedidoItem = bancoIngredientes.find(item => item.id === itemPedido);
    if(!pedidoItem){
        console.log(`Item escolhido invalido. escolha novamente :)\n`);
        return fazerPedido();
    }

    const nuItem = pedidoItem.nome;

    const valorPedido = tamanhoPizza.valor;
    

    const pedido = {
        nomeCliente,
        nuItem,
        observacoes,
        pizzaTamanho,
        valorPedido
    };

    pedidos.push(pedido);

    console.log(`\nPedido realizado com sucesso!\n`);
    console.clear();

    const continuarPedido = readlineSync.keyInYN("Deseja realizar outro pedido?");

    if (continuarPedido) {
        return fazerPedido();
    } else {
        console.log(`\nTotal de pedidos realizados: ${pedidos.length}\n`);
        return;
    }
};

// function para mostra os pedidos

function mostraPedidos () {
    console.log("\nPedidos registrados\n");
    console.log("-----------");

    pedidos.forEach((pedido, index) => {

        console.log(`Pedido: ${index + 1}\nCliente: ${pedido.nomeCliente}\nItem: ${pedido.nuItem}`);

        if(pedido.observacoes){
            console.log(`Observação: ${pedido.observacoes}`);
        };

        console.log(`Tamanho: ${pedido.pizzaTamanho}`);

        const tamanhoPizza = bancoTamanhoPizza.find(item => item.id === pedido.pizzaTamanho);

        if(tamanhoPizza){
            const valorTotal = tamanhoPizza.valor;
            console.log(`Valor total: ${valorTotal.toFixed(2)}\n------------`);
        } else {
            console.log(`Escolha um tamanho da pizza :(`);
        };
    });
};

module.exports = {
    fazerPedido,
    mostraPedidos
};