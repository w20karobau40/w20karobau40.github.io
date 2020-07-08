var ua = window.navigator.userAgent;
var isIE = /MSIE|Trident/.test(ua);

if (isIE) {
    //IE specific code goes here
    var viz_compat = document.getElementById("viz_compat");
    var content = document.createTextNode("Achtung: Die Darstellung der Studienergebnisse ist im Internetexplorer leider nicht möglich. Bitte verwenden Sie anderen Browser.");
    viz_compat.appendChild(content);
}
