const readlineSync = require('readline-sync');

const bancoTamanhoPizza = [
    {id: 'p', pizza: 'Pequena', valor: 80},
    {id: 'm', pizza: 'Media', valor: 90},
    {id: 'g', pizza: 'Grande', valor: 115}
];

const cardapio = require('./dados/cardapio');
const {fazerPedido , mostraPedidos} = require('./dados/fazerPedidos')


function main () {
    console.log("Sistema de Pedidos de Restaurante\n");

    for(const tamanhoPizza of bancoTamanhoPizza){
        console.log(`Pizza ${tamanhoPizza.pizza} R$:${tamanhoPizza.valor.toFixed(2)}\n`)
    };

    while(true){
        console.log("Opções:");
        console.log("1. Ver cardapio")
        console.log("2. Fazer um pedido");
        console.log("3. Mostrar pedidos registrados");
        console.log("4. Sair");

        const meuPedido = readlineSync.questionInt("\nEscolha uma opçao: ");

        switch(meuPedido){
            case 1:
                cardapio();
                break;
            case 2:
                fazerPedido();
                break;
            case 3:
                mostraPedidos();
                break;
            case 4:
                console.log(`Sistema encerrado :)`);
                return;
            default:
                console.log(`Opção inválida. Tente novamente.\n`);
        };
    };
};

main();