function urunler(){
    document.getElementById("sagpanel").style.backgroundColor = "darkblue"
    document.getElementById("sagpanel").innerHTML = 
    `
    <div style="margin-left:950px; margin-top:50px;">
    <img width="60px" src="https://www.nicepng.com/png/detail/283-2834425_woocommerce-add-to-cart-button-online-shopping-banner.png" alt="Woocommerce Add To Cart Button - Online Shopping Banner@nicepng.com" alt="">
    <a id="toplamUrunAdedi">0</a>
    </div>
    <div style="margin-left:450px; margin-top:150px">
    <table>
    <tr>
        <th>Ürün Adı</th>
        <th>Ürün Adı</th>
        <th>Ürün Adı</th>
    </tr>
    <tr>
        <td>Kazak</td>
        <td>Tişört</td>
        <td>Şapka</td>
    </tr>
    <tr>
        <td>200TL</td>
        <td>100TL</td>
        <td>50TL</td>
    </tr>
    <tr>
        <td> <button onclick="kazaksepeteekle()">Sepete Ekle</button></td>
        <td> <button onclick="tisortsepeteekle()">Sepete Ekle</button></td>
        <td> <button onclick="sapkasepeteekle()">Sepete Ekle</button></td>
    </tr>
</table>
</div>
<p id="fiyat">Toplam Fiyat: 0</p>


`
}

var kazakAdet = 0
var tisortkAdet = 0
var sapkaAdet = 0
var kazakFiyat = 200
var tisortFiyat = 150
var sapkaFiyat = 50
var toplamFiyat = 0



function kazaksepeteekle(){
    kazakAdet++
    toplamFiyat = kazakAdet*kazakFiyat + tisortkAdet*tisortFiyat + sapkaAdet*sapkaFiyat
    toplamUrunAdedi=kazakAdet+tisortkAdet+sapkaAdet
    document.getElementById("toplamUrunAdedi").innerHTML = toplamUrunAdedi
    document.getElementById("fiyat").innerHTML = 
    `
    Kazak Adetiniz = ${kazakAdet}
    <br>
    Tişört Adetiniz = ${tisortkAdet}
    <br>
    Şapka Adetiniz = ${sapkaAdet}
    <br>

    Toplam Fiyat:  ${toplamFiyat + " ₺"}
    `
}


function tisortsepeteekle(){
    tisortkAdet++
    toplamFiyat = kazakAdet*kazakFiyat + tisortkAdet*tisortFiyat + sapkaAdet*sapkaFiyat
    toplamUrunAdedi=kazakAdet+tisortkAdet+sapkaAdet
    document.getElementById("toplamUrunAdedi").innerHTML = toplamUrunAdedi
    document.getElementById("fiyat").innerHTML = 
    `
    Kazak Adetiniz = ${kazakAdet}
    <br>
    Tişört Adetiniz = ${tisortkAdet}
    <br>
    Şapka Adetiniz = ${sapkaAdet}
    <br>

    Toplam Fiyat: ${toplamFiyat + " ₺"}
    `
}


function sapkasepeteekle(){
    sapkaAdet++
    // kazakAdet = kazakAdet+1
    toplamFiyat = kazakAdet*kazakFiyat + tisortkAdet*tisortFiyat + sapkaAdet*sapkaFiyat
    toplamUrunAdedi=kazakAdet+tisortkAdet+sapkaAdet
    document.getElementById("toplamUrunAdedi").innerHTML = toplamUrunAdedi
    document.getElementById("fiyat").innerHTML =
    
    `
    Kazak Adetiniz = ${kazakAdet}
    <br>
    Tişört Adetiniz = ${tisortkAdet}
    <br>
    Şapka Adetiniz = ${sapkaAdet}
    <br>

    Toplam Fiyat:  ${toplamFiyat + " ₺"}
    `
}
