var num = window.document.querySelector('input#n1')
var lista = window.document.querySelector('select#flista')
var res = window.document.querySelector('div#res')
var valores = []


function inNumber(n){
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inlista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}



function adicionar(){
    if (inNumber(num.value) && !inlista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Numero ${num.value} adicionado`
        lista.appendChild(item)
    } else {
        alert('[ERRO!] NUmero já exitente ou não exite na lista')
    }
    num.value = ' 1'
}



function resultado(){
    if (valores.length == " ") {
        alert('[ERRO!] Por favor digite um Numero')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0


        for(let pos in valores) {
            soma += valores[pos]
            if(valores[pos] > maior) {
                maior = valores[pos]
            } else if (valores[pos] < menor){
                menor = valores[pos]
            }
        }
        media = soma / tot

        res.innerHTML = `Na lista tem ${tot} numeros`
        res.innerHTML += `<p>o maior numero é ${maior}</p>`
        res.innerHTML += `<p> O menor numero é ${menor} </p>`
        res.innerHTML += `<p> a soma de todos os valores ${valores}, é ${soma} </p>`
        res.innerHTML += `<p> E a média entre ele é de ${media}  </p>`
    }
}