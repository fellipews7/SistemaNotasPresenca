var isDadosValidos= false;

function AdicionarNota(){

    var tbody = document.getElementById('iTbodyNotas');
    var nota = document.getElementById('iNota').value;
    var descricao = document.getElementById('iDescricao').value;
    var dataProva = document.getElementById('iDataProva').value;
    var media = document.getElementById('iMediaCalculada');    
    var mediaPresenca = document.getElementById('iMediaPresenca');

    var novaLinha = document.createElement('tr');
    tbody.appendChild(novaLinha);

    var novaColunaNota = document.createElement('td');
    var novaColunaDescricao = document.createElement('td');
    var novaColunaData = document.createElement('td');
    
    novaLinha.appendChild(novaColunaNota);
    novaLinha.appendChild(novaColunaDescricao);
    novaLinha.appendChild(novaColunaData);

    novaColunaNota.innerText = nota;
    novaColunaDescricao.innerText = descricao;
    novaColunaData.innerText = dataProva;

    novaColunaNota.setAttribute("name", "notas");

    var notas = document.getElementsByName("notas");

    soma = 0;

    for (var i = 0; i < notas.length; i++) {
        soma += parseInt(notas[i].innerText);
    }

    media.innerText = (soma)/notas.length;

    DefinirSituacao(media.innerText, mediaPresenca.value);
}

function RegistrarPresenca(){
    var totalAulas = document.getElementById('iTotalAulas');
    var totalFaltas = document.getElementById('iTotalFaltas');
    var campoMedia = document.getElementById('iMediaPresenca');

    var mediaPresenca = ((parseInt(totalAulas.value) - parseInt(totalFaltas.value))/parseInt(totalAulas.value))*100;
    campoMedia.value = mediaPresenca;
}

function DefinirSituacao(media, presenca){
    situacao = document.getElementById('iSituacao');

    console.log(parseFloat(media) > 7);
    console.log(parseFloat(presenca) > 75);

    if(parseFloat(media) >= 7 && parseFloat(presenca) > 75){
        situacao.innerText = "Aprovado";
    }else if (parseInt(presenca) < 75) {
        situacao.innerText = "Reprovado por falta";
    } else if(parseFloat(media) < 7 && parseInt(presenca) >= 75) {
        situacao.innerText = "Exame";
    }


}