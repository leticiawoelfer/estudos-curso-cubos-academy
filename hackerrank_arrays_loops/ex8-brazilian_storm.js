let notas = [100, 100, 100, 50]
//descobrir a maior, a menor e tirar a média
let maiorNota = 0
let menorNota = 101
let soma = 0
for (let nota of notas) {
    soma += nota
    if (nota > maiorNota) {
        maiorNota = nota
    }
    if (nota < menorNota) {
        menorNota = nota
    }
}
let media = (soma - maiorNota - menorNota) / (notas.length - 2)
console.log(media)

