function anasayfa(){
    a = "selam"
    document.getElementById("sagpanel").style.backgroundColor = "blue"
    document.getElementById("sagpanel").innerHTML = 
    `
    <br><br><br><br>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sit doloribus totam deserunt corporis adipisci delectus excepturi voluptas, ipsam placeat repellat natus quasi esse modi velit ipsa ullam nihil numquam?</p>
    <br><br><br><br>
    <input type="text" placeholder="Bir Şey Yazın" id="">
    <br><br><br><br>
    ${a}
    `
}
