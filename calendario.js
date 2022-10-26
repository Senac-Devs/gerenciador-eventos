
function mostraData() {
    let date = document.getElementById("date").value;
    date = new Date(date).toLocaleDateString("pt-BR");
    console.log(date);
    console.log(eventos);
    // let blocoEvento = document.getElementById("eventos-teatro");
    // let eventos = blocoEvento.getElementsByClassName("evento");
    for (let i = 0; i < eventos.length; i++) {
        console.log(eventos[i]);
        // if (eventos[i].getElementByClassName("data").value == data) {
        //     console.log("evevntos para o dia " + data);
        //     console.log(eventos[i].getElementByClassName("titulo").value);
        // }
    }
}
