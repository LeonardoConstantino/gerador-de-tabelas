var titulo = document.getElementById("titulotab")
var range = document.getElementById("range")
var quantidadeColunas = document.getElementById("quantidadeColunas")
var cel1 = document.getElementById('cel1')
var cel2 = document.getElementById('cel2')
var cel3 = document.getElementById('cel3')
var cel4 = document.getElementById('cel4')
var cel5 = document.getElementById('cel5')
var clascel = 1

function adicionaTitulo() {
    divTitulo.innerHTML = '<div id="tab"> <h1 id="ti"></h1></div>';
    document.getElementById("ti").innerHTML = titulo.value
    escondeTitulo()
    esconde2Celulas()
    configurarTabela.style.display = 'inline'
    entradaCelulas.style.display = 'flex'
    addcontittab.style.display = 'inline'
    escondePrint.style.display = 'inline'
}

function escondeTitulo() {
    addtitulo.style.display = 'none'
}

function escondeConfTab() {
    configurarTabela.style.display = 'none'
}

function mdranger() {
    quantidadeColunas.innerHTML = range.value
    definirColunas()
}

function esconde2Celulas() {
    cel1.style.display = 'inline'
    cel2.style.display = 'inline'
    cel3.style.display = 'inline'
    cel4.style.display = 'none'
    cel5.style.display = 'none'
}

function criarthTabela() {
    var thTabela = document.createElement('tr')
    thTabela.innerHTML = `
        <th>${cel1.value}</th>
        <th>${cel2.value}</th>
        <th>${cel3.value}</th>
        <th>${cel4.value}</th>
        <th>${cel5.value}</th>
    `
    document.getElementById("tabela").appendChild(thTabela)

}

function criartdTabela() {
    var thTabela = document.createElement('tr')
    thTabela.innerHTML = `
    <tr>
    <td>${cel1.value}</td>
    <td>${cel2.value}</td>
    <td>${cel3.value}</td>
    <td>${cel4.value}</td>
    <td>${cel5.value}</td>
    </tr>
    `
    document.getElementById("tabela").appendChild(thTabela)

}

function limparInputsCelular() {
    var cel1 = document.getElementById('cel1').value = ''
    var cel2 = document.getElementById('cel2').value = ''
    var cel3 = document.getElementById('cel3').value = ''
    var cel4 = document.getElementById('cel4').value = ''
    var cel5 = document.getElementById('cel5').value = ''
}

function confirmarcolunas() {
    entradaCelulas.setAttribute('class', 'clik')
    divaddcontittab.style.display = 'inline'
    configurarTabela.style.display = 'none'
    cel1.focus()
}

function addContTituloTabela() {
    criarthTabela()
    limparInputsCelular()
    addcontittab.style.display = 'none'
    addcontctab.style.display = 'inline'
    cel1.focus()
}

function addConteudoCorpoTab() {
    criartdTabela()
    limparInputsCelular()
    cel1.focus()
    document.getElementById('imprimir').style.display = 'inline'
}

// function impri() {
//     var tela_impressao
//     var conteudo = document.getElementById('divtabela').innerHTML.tela_impressao = window.open('about:blank');

//     tela_impressao.document.write(conteudo);
//     tela_impressao.window.print();
//     tela_impressao.window.close();
// }

function impri(divtabela) {
    //pega o Html da DIV
    var divElements = document.getElementById('divtabela').innerHTML;
    //pega o HTML de toda tag Body
    var oldPage = document.body.innerHTML;

    //Alterna o body 
    document.body.innerHTML = 
      "<html><head><title></title></head><body>" + 
      divElements + "</body>";

    //Imprime o body atual
    window.print();

    //Retorna o conteudo original da página. 
    document.body.innerHTML = oldPage;

}


function definirColunas() {
    if (range.value == 1) {
        cel1.style.display = 'inline'
        cel2.style.display = 'none'
        cel3.style.display = 'none'
        cel4.style.display = 'none'
        cel5.style.display = 'none'

    } else if (range.value == 2) {
        cel1.style.display = 'inline'
        cel2.style.display = 'inline'
        cel3.style.display = 'none'
        cel4.style.display = 'none'
        cel5.style.display = 'none'

    } else if (range.value == 3) {
        esconde2Celulas()

    } else if (range.value == 4) {
        cel1.style.display = 'inline'
        cel2.style.display = 'inline'
        cel3.style.display = 'inline'
        cel4.style.display = 'inline'
        cel5.style.display = 'none'

    } else if (range.value == 5) {
        cel1.style.display = 'inline'
        cel2.style.display = 'inline'
        cel3.style.display = 'inline'
        cel4.style.display = 'inline'
        cel5.style.display = 'inline'
    }
}