function carregar () {
    var msg = window.document.getElementById('msg')
    var imagem = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    

    if (hora >= 0 && hora < 12){
        imagem.src = 'mattina.jpg'
        document.body.style.background = '#61B9F8'
        bom.innerHTML = 'Bom Dia!'
    } else if (hora >= 12 && hora <= 18){
        imagem.src = 'pomeriggio.jpg'
        document.body.style.background = '#B07B5B'
        bom.innerHTML = 'Boa Tarde!'
    } else {
        imagem.src = 'notte.jpg'
        document.body.style.background = '#523549'
        bom.innerHTML = 'Boa Noite!'
    }
}

