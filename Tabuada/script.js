let num = window.document.getElementById('n1')
let lista = window.document.getElementById('lista')
let b1 = document.getElementById('soma')

function soma() {
    lista.innerHTML = " "
    if (Number(num.value) == " "){
        window.alert('[ERRO!] Por favor digite um numero')
    } else {
        let valor1 = Number(num.value)

        for(let c = 1; c <= 10 ; c++) {
            let item = document.createElement('option')
            item.text += `${valor1} + ${c} = ${valor1 + c}`
            lista.appendChild(item)
        }
        num.value = ' '
    }
}

function sulb(){
    lista.innerHTML = " "
    if (Number(num.value) == " ") {
        window.alert('[ERRO!] Por favo digite um numero.')
    } else {
        let valor = Number(num.value)

        for(let c = 1; c <= 10 ; c++) {
            let item = document.createElement('option')
            item.text += `${c} - ${valor} = ${c - valor}`
            lista.appendChild(item)
        }
        num.value = " "
    }
}


function mult(){
    lista.innerHTML = " "
    if (Number(num.value) == " ") {
        window.alert('[ERRO!] Por favor digite um Numero') 
    } else {
        let valor = Number(num.value)

        for(let c = 0 ; c <= 10 ; c++){
            let item = document.createElement('option')
            item.text += `${valor} X ${c} = ${valor * c}`
            lista.appendChild(item)

        }
        num.value = ' '
    }
}


function divi(){
    lista.innerHTML = " "
    if (Number(num.value) == " ") {
        alert("[ERRO!] Por favo digite um numero")
    } else {
       let valor = Number(num.value) 

       for(let c = 0; c <= 10; c++) {
         let item = document.createElement('option')
         item.text += `${valor} / ${c} = ${valor / c}`  
         lista.appendChild(item) 
       }
       num.value = " "
    }
}

