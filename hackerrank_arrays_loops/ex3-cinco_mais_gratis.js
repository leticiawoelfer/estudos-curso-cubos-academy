let soma = 0
let menorPreco = precos[0]
for (let p of precos) {
    soma += p
    if (p < menorPreco) {
        menorPreco = p
    }
}
console.log(precos.length >= 5 ? (soma - menorPreco) : soma)