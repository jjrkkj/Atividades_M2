$(document).ready(() => {
    // Traz formação
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://127.0.0.1:5500/formacao', true);
    xhr.onload = function() {
        if (xhr.status == 200) {
            let html = '';
            let responseObj = JSON.parse(xhr.responseText);
            responseObj.forEach(element => {
                html += `<p class="tipo">${element["curso"]} | <strong>${element["ano_inicial"]} - ${element["ano_final"]}</strong></p><p class="texto">${element["descricao"]}</p>`
            });
            $("#formacao").append(html)
        } else {
            console.log('ERROR: ' + xhr.status);
        }
    }
    xhr.send();
})