function responda() {
    var resposta
    while (resposta !== 1 || resposta !== 2) {
        resposta = prompt("Digite a resposta: ")
        if (resposta == 2) {
            window.location.href = "../html/gameOverThor.html"
            break
        } else if (resposta == 1) {
            window.location.href = "../html/vencedorThor.html"
            break
        } else {
            alert("Escolha somente entre as opções abaixo!")
            break
        }
    }
}