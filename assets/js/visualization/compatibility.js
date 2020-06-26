var ua = window.navigator.userAgent;
var isIE = /MSIE|Trident/.test(ua);

if (isIE) {
    //IE specific code goes here
    var viz_compat = document.getElementById("viz_compat");
    var content = document.createTextNode("Hier ist ein schicker Text, der darauf hinweist, dass diese Visualisierung nicht mit dem Internet Explorer kompatibel ist, zu finden in assets/js/visualization/compatibility.js");
    viz_compat.appendChild(content);
}
