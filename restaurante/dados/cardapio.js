const bancoIngredientes = [
    {id: 1, nome: '5 Queijos', descricao: 'Catupiry, Cheddar, Muçarela, Parmesão, Provolone'},
    {id: 2, nome: 'Alicatra Acebolada', descricao: 'Alcatra, cebola assada na manteiga, Molho, Muçarela, Orégano'},
    {id: 3, nome: 'Alicatra ao Barbeque', descricao: 'Alcatra ao Barbecue, Catupiry, Molho, Molho Barbecue, Muçarela, Orégano'},
    {id: 4, nome: 'Atum', descricao: 'Atum Sólido, Molho, Muçarela, Orégano'},
    {id: 5, nome: 'Bacon', descricao: 'Bacon, Molho, Muçarela, Orégano'}
];

function cardapio (){
    console.log(`\nCardapio de Pizza\n`);

    for(const cardapio of bancoIngredientes){
        console.log(`Id: ${cardapio.id}\nPizza: ${cardapio.nome}\nDescriçao: ${cardapio.descricao}\n`);
    };
};

module.exports = cardapio;