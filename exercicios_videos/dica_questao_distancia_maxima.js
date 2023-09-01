//Dica questão Distância Máxima Hacker Rank
//A partir dessa questão as entradas serão strings inteiras e teremos que organizar antes de começar a fazer, então
//nessa dica ele explicou como fazer com um exemplo...

const input = "3\n0 0\n0 3\n4 0\n";
const linhas = input.trim().split("\n")

const n = parseInt(linhas[0], 10)// parse para Int na base 10, que vai converter para um inteiro, se botasse base 2 por exemplo iria para um binário...

const coordenadas = [];
for (let i = 1; i < linhas.length; i++) {
    const coord = linhas[i].split(" ");
    coordenadas.push({
        x: parseInt(coord[0], 10),
        y: parseInt(coord[1], 10)
    })
}
console.log(coordenadas)