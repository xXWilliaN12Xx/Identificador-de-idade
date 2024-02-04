function verificar () {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var resultado = document.getElementById('resultado')
    if (fano.value.length == 0 || fano.value > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'foto-criança-m.jpg')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'foto-jovem-m.jpg')
            } else if (idade < 60) {
                // Adulto
                img.setAttribute('src', 'foto-adulto-m.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'foto-idoso-m.jpg')
            }
        } else if (fsex[1].checked) {
            gênero = 'mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'foto-criança-f.jpg')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'foto-jovem-f.jpg')
            } else if (idade < 60) {
                // Adulta
                img.setAttribute('src', 'foto-adulta-f.jpg')
            } else {
                //Idosa
                img.setAttribute('src', 'foto-idosa-f.jpg')
            }
        }
        resultado.style.textAlign = 'center'
        resultado.innerHTML = `Detectamos um ${gênero} com a idade de ${idade} anos`
        resultado.appendChild(img)
    }
}