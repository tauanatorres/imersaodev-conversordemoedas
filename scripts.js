function converterDolar() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmRealNumerico = parseFloat(valor);
  console.log(valorEmRealNumerico);

  var valorEmDolar = valorEmRealNumerico / 5.12;
  console.log(valorEmDolar);

  var elementoValorConvertidoDolar = document.getElementById("resultado");
  var valorConvertido =
    "Em Dólar, R$" +
    valorEmRealNumerico +
    " equivale a $" +
    valorEmDolar.toFixed(2);
  elementoValorConvertidoDolar.innerHTML = valorConvertido;
}

function converterEuro() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmRealNumerico = parseFloat(valor);
  console.log(valorEmRealNumerico);

  var valorEmEuro = valorEmRealNumerico / 5.62;
  console.log(valorEmEuro);

  var elementoValorConvertidoEuro = document.getElementById("resultado");
  var valorConvertido =
    "Em Euro, R$" +
    valorEmRealNumerico +
    " equivale a €" +
    valorEmEuro.toFixed(2);
  elementoValorConvertidoEuro.innerHTML = valorConvertido;
}

function converterBitcoin() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmRealNumerico = parseFloat(valor);
  console.log(valorEmRealNumerico);

  var valorEmBitcoin = valorEmRealNumerico / 196669.41;
  console.log(valorEmBitcoin);

  var elementoValorConvertidoBitcoin = document.getElementById("resultado");
  var valorConvertido =
    "Em Bitcoin, R$" +
    valorEmRealNumerico +
    " equivale a ₿" +
    valorEmBitcoin.toFixed(8);
  elementoValorConvertidoBitcoin.innerHTML = valorConvertido;
}
