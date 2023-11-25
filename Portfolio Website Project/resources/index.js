import "./css/index.css";


document.getElementById("colorButt").addEventListener ("click", colorChange); 


var currColor = '000000';
var nextColor = colorPalette[Math.random() * colorPalette.length];

const colorPalette = ['28AFB0', '19647E', 'EE964B', 'E16F7C', '98DFAF', 'FF6666', 'C76D7E', '6B2D5C', '4E6E58', '840032', '187795', '1B4079', '474350', 'DAC4F7', 'C98686', '966B9D', 'F18805', '090C9B' ]

function colorChange() {
  currColor = nextColor;
  nextColor = colorPalette[Math.random() * colorPalette.length];
  while(nextColor == currColor) {
    nextColor = colorPalette[Math.random() * colorPalette.length];
  }
}