function montaCardEvento(evento, categoria) {
    const divAlvo = document.getElementById(categoria);
    divAlvo.innerHTML += `<div class="column main-column evento">
 <img src="../img/${categoria}.png">
 <p class="organizador">${evento.organizador}</p>
 <p class="local">${evento.local}</p>
 <p class="data">${evento.data}</p> 
 <p class="horario">${evento.horário}</p>
 <p>${evento.evento}</p>
 <p class="Classificação">${evento.classificação}</p>
 </div>`;
}

function montaCategoria(id) {
    if (document.getElementById(id) == null) {
        const divAlvo = document.getElementById("main");
        divAlvo.innerHTML += `<div class="columns" id="${id}"></div>`;
    }
}
