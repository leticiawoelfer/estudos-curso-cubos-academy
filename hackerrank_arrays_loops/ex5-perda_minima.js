let precos = [20, 15, 8, 2, 12] //3
let perdaMinima = 99999999
let diferenca = 0
for (let i = 0; i <= precos.length; i++) {
    for (let j = i + 1; j <= precos.length; j++) {
        if (precos[i] > precos[j]) {
            diferenca = precos[i] - precos[j]
            if (diferenca < perdaMinima) {
                perdaMinima = diferenca
            }
        }

    }
}
console.log(perdaMinima)
