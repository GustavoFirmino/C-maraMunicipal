let cartuchos = [];

function adicionarCartucho() {
    const nomeCartucho = document.getElementById('nome-cartucho').value;
    const quantidadeCartucho = document.getElementById('quantidade-cartucho').value;

    if (nomeCartucho && quantidadeCartucho) {
        const cartucho = {
            nome: nomeCartucho,
            quantidade: parseInt(quantidadeCartucho)
        };

        cartuchos.push(cartucho);
        exibirCartuchos();
        limparCampos();
    } else {
        alert('Preencha todos os campos!');
    }
}

function exibirCartuchos() {
    const cartuchoListContainer = document.getElementById('cartucho-list');
    cartuchoListContainer.innerHTML = '';

    cartuchos.forEach(cartucho => {
        const cartuchoItem = document.createElement('div');
        cartuchoItem.className = 'cartucho-item';
        cartuchoItem.innerHTML = `<strong>${cartucho.nome}:</strong> ${cartucho.quantidade} unidades`;

        cartuchoListContainer.appendChild(cartuchoItem);
    });
}

function limparCampos() {
    document.getElementById('nome-cartucho').value = '';
    document.getElementById('quantidade-cartucho').value = '';
}
