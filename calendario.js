function mostraData() {
    let data = document.getElementById("data").value;
    data=new Date(data).toLocaleDateString("pt-BR")
    let blocoEvento = document.getElementById("eventos-teatro");
    let eventos = blocoEvento.getElementsByClassName("evento");
    for (let i = 0; i < eventos.length; i++) {
        if (eventos[i].getElementByClassName("data").value == data) {
            console.log("evevntos para o dia " + data);
            console.log(eventos[i].getElementByClassName("titulo").value);
        }
    }
}
