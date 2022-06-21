function tabu(){

     num = window.document.getElementById('n1')
     tab = window.document.getElementById('seltab')

    if (num.value.length == " "){
        window.alert('[ERRO!] Por favor digite novamente.')
    } else {
         n = Number(num.value)
        tab.innerHTML = ' '
        for(var c = 1; c <= 10 ; c++) {
            var item = window.document.createElement('option')
            item.text = `${n}  x  ${c} = ${n * c}`
            tab.appendChild(item)
        }
    }
}