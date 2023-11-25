
window.addEventListener('DOMContentLoaded', () => {
    document.getElementById("colorButt").addEventListener ("click", colorChange); 
    //currColors
    const a = document.querySelectorAll("html");
    const b = document.querySelectorAll(".hero-section");
    const c = document.querySelectorAll("main");
    const d = document.querySelectorAll(".about-section");
    const e = document.querySelectorAll(".about-middle");

    //nextColors
    const f = document.getElementsByTagName("h1");
    const g = document.querySelectorAll(".colorButton");
    const h = document.querySelectorAll(".about-image::before");
    const i = document.querySelectorAll(".chickenJoe");
    const j = document.querySelectorAll(".surfsupbottom");

    const colorPalette = ['28AFB0', '19647E', 'EE964B', 'E16F7C', '98DFAF', 'FF6666', 'C76D7E', '6B2D5C', '4E6E58', '840032', '187795', '1B4079', '474350', 'DAC4F7', 'C98686', '966B9D', 'F18805', '090C9B' ]

    var currColor = '000000';
    var nextColor = colorPalette[Math.floor(Math.random() * colorPalette.length)];

    f.style.color = "#"+nextColor;
    g.style.color = "#"+nextColor;
    h.style.backgroundColor = "#"+nextColor;
    i.style.color = "#"+nextColor;
    j.style.borderTop = "5px solid #"+nextColor;


    function colorChange() {
    currColor = nextColor;
    nextColor = colorPalette[Math.floor(Math.random() * colorPalette.length)];
    while(nextColor == currColor) {
        nextColor = colorPalette[Math.floor(Math.random() * colorPalette.length)];
    }
    //currColor stuff
    a.style.backgroundColor = "#"+currColor;
    b.style.backgroundColor = "#"+currColor;
    c.style.backgroundColor = "#"+currColor;
    d.style.backgroundColor = "#"+currColor;
    e.style.backgroundColor = "#"+currColor;

    //nextColor stuff
    f.style.color = "#"+nextColor;
    g.style.color = "#"+nextColor;
    h.style.backgroundColor = "#"+nextColor;
    i.style.color = "#"+nextColor;
    j.style.borderTop = "5px solid "+nextColor;
    }
});

