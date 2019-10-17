function pageLoad(){

    var d = new Date();
    var year = d.getFullYear();
    document.getElementById("copyright").innerHTML = "Copyright © ROC van Flevoland " + year + ".";

}