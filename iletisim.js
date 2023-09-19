function iletisim(){
    document.getElementById("sagpanel").style.backgroundColor = "darkcyan"
    document.getElementById("sagpanel").innerHTML =
    `
    <br><br><br><br>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sit doloribus totam deserunt corporis adipisci delectus excepturi voluptas, ipsam placeat repellat natus quasi esse modi velit ipsa ullam nihil numquam?</p>
    <br><br>
    <input type="text"  placeholder="Adınız" name="" id="ad">
    <br><br>
    <input type="text"  placeholder="Soyadınız" name="" id="soyad">
    <br><br>
    <input type="number" placeholder="Telefon Numaranız" id="telefon">
    <br><br>
    <button onclick="gonder()">Gönder</button>
    <p id="yazi"></p>
    `
}

function gonder(){
    var isim = document.getElementById("ad").value
    var soyisim = document.getElementById("soyad").value
    document.getElementById("yazi").innerHTML = "Hoşgeldin " + isim + " " + soyisim
}