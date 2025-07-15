/*
[x]saber quando o botao foi clicado
[x]pegar texto dentro do input
[x]colocar esse texto na tela
[x]Deletar tarefa ao clicar no x
*/ 

function adicionarTarefa(){
    let tarefa = document.querySelector("input").value
   
    let li = document.createElement('li')
    li.innerHTML = tarefa + '<span onclick="deletarTarefa(this)">❌</span>'
    li.setAttribute("onclick", "concluirTarefa(this)");
   
    document.querySelector('ol').appendChild(li)
   
    document.querySelector("input").value = ''

};

function deletarTarefa(li){
    li.parentElement.remove()
}

function concluirTarefa(li){
    li.classList.toggle("riscado")
}

