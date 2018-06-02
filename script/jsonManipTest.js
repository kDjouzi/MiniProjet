//test unitaire de manipulation JSON

function letsTryJSON() {
    var json = [
            {
                "Question"  :   "Ceci est-il la question n°1 ?",
                "Reponse"   :   "Bien sûr, la réponse est : oui, la question 'Ceci est-il la question n°1' est la question n°1."
            },
            {
                "Question"  :   "Et ça la n°2 ?",
                "Reponse"   :   "Il y a de fortes chances, effectivement."
            }
           ];
    console.log("Longueur tableau : " + json.length);

    var htm = ""; //stocker le futur html dans une string

    for (var i=0; i < json.length; i++) {
        htm += "<h1>" + json[i].Question + "</h1>";
        htm += "<p>" + json[i].Reponse + "</p>";
    }
    console.log("htm contient : " + htm);
    //htm.toString;

    document.getElementById("niceJSONbox").innerHTML = htm;
}