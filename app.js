function sortear () {
    let quantidadeDeNumeros = parseInt(document.getElementById('quantidade').value);
    let numero = parseInt(document.getElementById('de').value);
    let ateNumero = parseInt(document.getElementById('ate').value);

    if ( numero >= ateNumero) {
    alert("O Campo 'Do Número' deve ser inferior ao campo 'Até o número'.");
    return;

    if( quantidadeDeNumeros > (ateNumero - numero + 1) ) {
        alert("O Campo 'Quantidade' deve ser menor ou igual ao intervalo informado no campo 'Do número' até o campo 'Até o número'.");
        return;
    }
}
    let quantidadeDeSorteados = [];

    let numerosSorteados;
    let palavra =  quantidadeDeNumeros > 1 ? 'Números Sorteados' : "Número Sorteado";


    for (let i = 0; i < quantidadeDeNumeros; i++) {
        numerosSorteados = gerarNumeroAleatorio(numero, ateNumero);
        
        while (quantidadeDeSorteados.includes(numerosSorteados)) {
            numerosSorteados =  gerarNumeroAleatorio (numero, ateNumero);
        }

        quantidadeDeSorteados.push(numerosSorteados); 
    }
     
    function mostrarResultado () {
            document.getElementById("resultado").innerHTML = `<label class="texto__paragrafo">${palavra}: ${quantidadeDeSorteados}`;
            document.getElementById("btn-reiniciar").className = 'container__botao';
            }
            mostrarResultado();



function gerarNumeroAleatorio (min,max) {

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

}

function reiniciar () {
    document.getElementById("resultado").innerHTML = "";
    document.getElementById('quantidade').value = "";
    document.getElementById('de').value = "";
    document.getElementById('ate').value = "";         
}

