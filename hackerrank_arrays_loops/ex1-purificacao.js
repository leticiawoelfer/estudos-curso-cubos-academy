const especial = "!@#$%&*()"
let resultado = ""
for (let c of stringCorrompida) {
    let caracterEspecial = false
    for (let e of especial) {
        if (c === e) {
            caracterEspecial = true
        }
    }
    resultado += caracterEspecial ? "" : c
}
console.log(resultado)