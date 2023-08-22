let imagem = 0;
for (let comando of sequencia) {
    if (comando == ">") {
        imagem++;
        if (imagem === 7) {
            imagem = 0;
        }
    }
    if (comando == "<") {
        imagem--;
        if (imagem === -1) {
            imagem = 6;
        }
    }
}
console.log(imagem)