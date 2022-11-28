function mostraData() {
    let date = document.getElementById("data").value;
    date = new Date(date).toLocaleDateString("pt-br", { timeZone: "UTC" });
    console.log(date);

    let blocoEvento = document.getElementById("eventos-teatro");
    for (let i = 0; (i = eventos.length); i) {
        if(date==eventos){console.log("true")
        }else{
            console.log("sem eventos hj")
        }
    }
}
