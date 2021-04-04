let valorLibraText = prompt("Valor em Libra:")
  let valorLibraNumber = parseFloat(valorLibraText)

let valorDolar = valorLibraNumber * 1.38
let valorDolarFixed = valorDolar.toFixed(2)
 alert(valorDolarFixed)