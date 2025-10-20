function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('iidd')
    var res = document.querySelector('div#res')


    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verfique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gen = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gen = 'Homem'
            if (idade >=0 && idade < 4){
                //bebe
                img.setAttribute('src', 'bebe.png')
            } else if (idade < 12) {
                //criança
                img.setAttribute('src', 'cri-menino.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'jov-h.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'homem.png')
            } else if (idade < 60) {
                //adulto
                img.setAttribute('src', 'idoso.png')
            } else {
                //idoso
                img.setAttribute('src', 'idoso.png')
            }
        } else if (fsex[1].checked){
            gen = 'Mulher'
            if (idade >=0 && idade < 4){
                //bebe
                img.setAttribute('src', 'bebef.png')
            } else if (idade < 12) {
                //criança
                img.setAttribute('src', 'cri-menina.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'jov-m.png')
            } else if (idade < 45) {
                //adulto
                img.setAttribute('src', 'mulher.png')
            } else if (idade < 60) {
                //adulto
                img.setAttribute('src', 'idosa.png')
            } else {
                //idoso
                img.setAttribute('src', 'idosavuvo.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gen} com ${idade} anos.`
        res.appendChild(img)
    }

}