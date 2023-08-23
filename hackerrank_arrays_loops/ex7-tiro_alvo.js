let disparos = [0, 50, 90, 80, 100, 80, 40]
let pontos = 0
for (let d of disparos) {
    if (d >= 70) {
        pontos++
    }
}
if (pontos >= 3) {
    console.log(pontos)
} else {
    console.log("ELIMINADO")
}