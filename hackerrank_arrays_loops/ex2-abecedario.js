let resultado = 0
for (let i of palavras) {
    if (i[0] !== letra) {
        resultado++
    }
}
console.log(resultado)