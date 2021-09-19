let dados = document.querySelector("#inputDados")
let resultado = document.querySelector("#lista")
dados.focus()

function addTarefa () {
    let dadosValor = dados.value.trim()
    if (dadosValor.length === 0) {
        alert("Digite uma tarefa!")
    }
    else {
        let li = document.createElement("li")
        let div = document.createElement("div")
        div.className = "divResultado"
        let input = document.createElement("input")
        input.className = "checkbox"
        input.type = "checkbox"
        input.addEventListener("change", marcarTarefa)
        let p = document.createElement("p")
        p.className = "entrada"
        let botao = document.createElement("button")
        botao.className = "botaoTarefa"
        botao.setAttribute("onclick", "deletarTarefa(this)")
        botao.innerHTML = "X"
        li.appendChild(div)
        div.appendChild(input)
        div.appendChild(p)
        div.appendChild(botao)
        let item = document.createTextNode(dadosValor)
        p.appendChild(item)
        resultado.appendChild(li)
        dados.value = ""
        salvarLista()
    }
}

function marcarTarefa(evento) {
    const paragrafo = evento.target.parentElement.children[1]
    if (evento.target.checked) {
        paragrafo.classList.add("marcado")
      } else {
        paragrafo.classList.remove("marcado")
      }
    salvarLista()
}

function deletarTarefa(evento) {
    let apagarConfirma = confirm("Deseja apagar a tarefa?")
    if (apagarConfirma) {
        evento.parentNode.parentNode.parentNode.removeChild(evento.parentNode.parentNode)
        salvarLista()
    }
}

function salvarLista() {
    localStorage.setItem('listadetarefas', resultado.innerHTML)
}

function carregarLista() {
    let carregaLista = localStorage.getItem("listadetarefas")
    if (carregaLista) {
        resultado.innerHTML = carregaLista
    let riscado = document.querySelectorAll(".marcado")
    for (const item of riscado) {
        item.parentElement.children[0].checked = true
    }
    let eventoCarregar = document.querySelectorAll(".checkbox")
    for (const item of eventoCarregar) {
        item.parentElement.children[0].addEventListener("change", marcarTarefa)
    }
    }
}

carregarLista()