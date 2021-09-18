let dados = document.querySelector("#inputDados")
let resultado = document.querySelector("#lista")
dados.focus()

function carregarLista() {
    let carregaLista = localStorage.getItem("listadetarefas")
    if (carregaLista) {
        resultado.innerHTML = carregaLista
    let riscado = document.querySelectorAll(".marcado")
    for (const item of riscado) {
        item.parentElement.children[0].checked = true;
        item.parentElement.children[0].addEventListener("change", checkEvento)
    }
    let eventoCarregar = document.querySelectorAll(".checkbox")
    for (const item of eventoCarregar) {
        item.parentElement.children[0].addEventListener("change", checkEvento)
    }
    }
}

function addTarefa () {
    let dadosValor = dados.value.trim()
    if (dadosValor.length === 0) {
        alert("Digite a tarefa!")
    }
    else {
        let li = document.createElement("li")
        let div = document.createElement("div")
        div.className = "divResultado"
        let input = document.createElement("input")
        input.className = "checkbox"
        input.type = "checkbox"
        input.addEventListener("change", checkEvento)
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
        salvarLista()
    }
}

function checkEvento(evento) {
    const paragrafo = evento.target.parentElement.children[1]
    if (evento.target.checked) {
        paragrafo.classList.add("marcado")
      } else {
        paragrafo.classList.remove("marcado")
      }
    salvarLista()
}

function deletarTarefa(apagar) {
    let apagarConfirma = confirm("Deseja apagar a tarefa?")
    if (apagarConfirma) {
        apagar.parentNode.parentNode.parentNode.removeChild(apagar.parentNode.parentNode)
        salvarLista()
    }
}

function salvarLista() {
    localStorage.setItem('listadetarefas', resultado.innerHTML)
}

carregarLista()