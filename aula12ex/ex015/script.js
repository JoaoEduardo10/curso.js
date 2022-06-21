    function verificar(){
        var data = new Date()
        var ano = data.getFullYear()
        var fano = window.document.getElementById('txtano')
        var res = window.document.querySelector('div#res')
        if (fano.value.length ==0 || fano.value > ano) {
            window.alert('[ERRO] Verifique os dados e tente novamente!')
            
        } else{
            var fsex = document.getElementsByName('radsex')
            var idade = ano - Number(fano.value)
            var genero = ""
            var img = document.createElement('img')
            img.setAttribute('id', 'foto')

            if (fsex[0].checked){
                genero = 'Homen'
                if(idade > 0 && idade <= 11){
                    //criança
                    genero = 'Menino'
                    img.src =('criançaH.png')
                } else if( idade < 21){
                    // jovem
                    genero = 'Jovem'
                    img.setAttribute('src','adolecenteH.png')
                } else if(idade < 50){
                    // adulto
                    img.setAttribute('src','adultoH.png')
                }else{
                    //idoso
                    genero = 'Idoso'
                    img.setAttribute('src','idoso.png')
                }
            } else if(fsex[1].checked){
                genero = 'Mulher'
                if( idade >  0 && idade <= 11){
                    //criança
                    genero = 'Menina'
                    img.setAttribute('src','criançaM.png')
                } else if( idade <21){
                    //adolecente
                    genero = 'Jovem'
                    img.setAttribute('src','adolecentM.png')
                }else if (idade < 50){
                    //adulto
                    img.setAttribute('src','mulheradulta.png')
                }else {
                    //idoso
                    genero = 'Idosa'
                    img.setAttribute('src',"idosa.png")
                }

            }
            res.style.textAlign = 'center'
            res.innerHTML = `Detequetamos ${genero} com ${idade}.<br/>`
        }   res.appendChild(img)
    }