var inicial = 0;
var caio = { nome: "Caio", vitorias: inicial, empates: inicial, derrotas: inicial, pontos: inicial };
var tagna = { nome: "Tagna", vitorias: inicial, empates: inicial, derrotas: inicial, pontos: inicial };
var bianca = { nome: "Bianca", vitorias: inicial, empates: inicial, derrotas: inicial, pontos: inicial };

caio.pontos = calculaPontos(caio);
tagna.pontos = calculaPontos(tagna);
bianca.pontos = calculaPontos(bianca);

function calculaPontos(jogador) {
    var pontos = jogador.vitorias * 3 + jogador.empates;
    return pontos;
}

//console.log(caio); --- ok

var jogadores = [caio, tagna, bianca];

function exibeJogadoresNaTela(jogadores) {
    var elemento = "";
    for (var i = 0; i < jogadores.length; i++) {
        elemento += "<tr><td>" + jogadores[i].nome + "</td>";
        elemento += "<td>" + jogadores[i].vitorias + "</td>";
        elemento += "<td>" + jogadores[i].empates + "</td>";
        elemento += "<td>" + jogadores[i].derrotas + "</td>";
        elemento += "<td>" + jogadores[i].pontos + "</td>";
        elemento += "<td><button onClick=adicionarVitoria(" + i + ")>Vitória</button></td>";
        elemento += "<td><button onClick=adicionarEmpate(" + i + ")>Empate</button></td>";
        elemento += "<td><button onClick=adicionarDerrota(" + i + ")>Derrota</button></td>";
        elemento += "</tr>";
    }
    console.log(elemento);
    var tabelaJogadores = document.getElementById("tabelaJogadores");
    tabelaJogadores.innerHTML = elemento;
}

exibeJogadoresNaTela(jogadores);

function adicionarVitoria(i) {
    var jogador = jogadores[i];
    jogador.vitorias++;
    jogador.pontos = calculaPontos(jogador);
    exibeJogadoresNaTela(jogadores);
}

function adicionarEmpate(i) {
    var jogador = jogadores[i];
    jogador.empates++;
    jogador.pontos = calculaPontos(jogador);
    exibeJogadoresNaTela(jogadores);
}

function adicionarDerrota(i) {
    var jogador = jogadores[i];
    jogador.derrotas++;
    jogador.pontos = calculaPontos(jogador);
    exibeJogadoresNaTela(jogadores);
}