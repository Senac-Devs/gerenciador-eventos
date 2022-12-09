function exibeEvento(categoria, evento) {
    montaCategoria(categoria);

    montaCardEvento(evento, categoria);
}

function mostraEventosEmData() {
    document.getElementById("main").innerHTML = "";
    let date = document.getElementById("data").value;
    date = new Date(date).toLocaleDateString("pt-br", { timeZone: "UTC" });
    for (let i = 0; i < listaEventos.length; i++) {
        Object.entries(listaEventos[i]).forEach((categoria) =>
            categoria[1].forEach((evento) =>
                evento.data == date ? exibeEvento(categoria[0], evento) : ""
            )
        );
    }
}
