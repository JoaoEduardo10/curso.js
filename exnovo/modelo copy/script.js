var num1 = window.document.getElementById('n1')
var num2 = window.document.getElementById('n2')
var fun = document.getElementById('veri')
var res = window.document.getElementById('res')
fun.addEventListener("click", verificar)
var h = new Date()
var horas = h.getHours()
var minu = h.getMinutes()
var seg = h.getSeconds()


function verificar(){
    if(Number(num1.value) == " " || Number(num2.value) == ' '){
        alert('[ERRO]')
    } else if(Number(num1.value) == Number && Number(num2.value) == " "){
        alert("[ERRO]")
    } else {
        let n1 = Number(num1.value)
        let n2 = Number(num2.value)
        let soma = n1 + n2
        res.innerHTML = " "
        res.innerHTML += `<p>A soma entre ${n1} + ${n2} é igual a ${soma}</p>`
        res.innerHTML += `<p> as horas são exatamente ${horas}:${minu}:${seg} </p>`
        if(soma % 2 == 0) {
            res.innerHTML += `<p>O numero ${soma} é um numero par</p>`
        } else {
            res.innerHTML += `<p>O numero ${soma} é um numero impar</p>`
        }
        num1.value = " "
        num2.value = " "
    }
}
