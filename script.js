
// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

// import the style
import "./style.scss";

/*
  Put the JavaScript code you want below.
*/

document.querySelector(".square").style.height = "200px";
document.querySelector(".square").style.width = "200px";
document.querySelector(".square").style.backgroundColor = "black";
document.querySelector(".Green").addEventListener("click", () => {
  document.querySelector(".square").style.backgroundColor = "Green";
});
document.querySelector(".Blue").addEventListener("click", () => {
  document.querySelector(".square").style.backgroundColor = "Blue";
});
document.querySelector(".Red").addEventListener("click", () => {
  document.querySelector(".square").style.backgroundColor = "Red";
});
