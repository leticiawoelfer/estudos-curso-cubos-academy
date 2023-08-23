let resultados = ["V", "E", "V", "E"]
let pontos = 0
for (let r of resultados) {
    if (r === "V") {
        pontos += 3
    } else if (r === "E") {
        pontos += 1
    }
}
console.log(pontos)

