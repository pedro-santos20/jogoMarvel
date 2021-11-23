function responda() {
    var resposta
    while (resposta !== 1 || resposta !== 2 || resposta !== 3) {
        resposta = prompt("Digite a resposta: ")
        if (resposta == 1) {
            window.location.href = "../html/gameOver.html"
            break
        } else if (resposta == 2) {
            window.location.href = "../html/visao3.html"
            break
        } else if (resposta == 3) {
            window.location.href = "../html/gameOver.html"
        } else {
            alert("Escolha somente entre as opções abaixo!")
            break
        }
    }
}