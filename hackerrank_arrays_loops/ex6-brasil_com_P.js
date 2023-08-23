let primeiraLetra, segundaLetra, palavras
const param2 = {
    "primeiraLetra": "c",
    "segundaLetra": "v",
    "palavras": [
        "aveia",
        "manha",
        "ave"
    ]
}
const param1 = {
    "primeiraLetra": "a",
    "segundaLetra": "v",
    "palavras": [
        "aveia",
        "manha",
        "ave"
    ]
}

primeiraLetra = param2.primeiraLetra
segundaLetra = param2.segundaLetra
let encontrou = false
for (let palavra of param2.palavras) {
    if (palavra[0] === primeiraLetra && palavra[1] === segundaLetra) {
        console.log(palavra)
        encontrou = true
    }
}
if (!encontrou) {
    console.log("NENHUMA")
}
