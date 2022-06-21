function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data= new Date()
    var hora =data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        window.document.body.style.background = '#ccc7c6'
        img.src = 'fotomanha-2.png'
    } else if (hora >= 12 && hora < 18) {
        window.document.body.style.background = '#f9a10a'
        img.src = 'fototarde-4.png'
    }else {
        document.body.style.background = '#4a395a'
        img.src = 'fotonoite-3.png'
    }
}
