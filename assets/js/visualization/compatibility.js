var ua = window.navigator.userAgent;
var isIE = /MSIE|Trident/.test(ua);

if (isIE) {
    //IE specific code goes here
    var viz_compat = document.getElementById("viz_compat");
    var content = document.createTextNode("Achtung: Die Darstellung der Studienergebnisse ist im Internet Explorer leider nicht möglich. Bitte verwenden Sie einen anderen Browser, zum Beispiel Mozilla Firefox.");
    viz_compat.appendChild(content);
}
