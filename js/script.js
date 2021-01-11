function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var formAno = window.document.getElementById('txtano');
    var res = window.document.querySelector('div#res');

    if (formAno.value.length == 0 || Number(formAno.value) > ano) {
        window.alert("[ERRO] Verifique os dados e tente novamente!");
    }else {
        var fsex = window.document.getElementsByName('radsex');
        var idade = ano - Number(formAno.value);
        var gênero = '';
        var img = window.document.createElement('img');
        img.setAttribute('id', 'foto'); // Assim como criar um Id direto no html, no Js também é possível.

        if (fsex[0].checked) {
            gênero = "Homem";
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'img/crianca-homem.png');
            }else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'img/jovem-homem.png');
            }else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'img/homem-adulto.png');
            }else {
                // Idoso
                img.setAttribute('src', 'img/idoso-homem.png');
            }

        } else if (fsex[1].checked) {
            gênero = "Mulher";
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'img/crianca-mulher.png');
            }else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'img/jovem-mulher.png');
            }else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'img/mulher-adulta.png');
            }else {
                // Idoso
                img.setAttribute('src', 'img/idosa-mulher.png');
            }
        }
        res.style.textAlign = "center";
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`;
        res.appendChild(img);
    }
}