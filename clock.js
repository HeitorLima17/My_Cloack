function showTime() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session = "AM";


    // if represente o SE (uma condição){aqui dentro ele executa o código referente ao SE}
    // definindo o get.hours para se for igual a 0 ela se transformar em 12
    if (h == 0) {
        h = 12;
    }
   
    if (h > 12) {
        h = h - 12;
        session = "PM"
    }

    // variavel =  (condição) ? valor se true : false
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClock").innerHTML = time;
    document.getElementById("MyClock").textContent = time;

    setTimeout(showTime, 1000);
}


showTime();