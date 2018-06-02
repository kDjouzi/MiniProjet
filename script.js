//une URL isolée, serait-ce plus efficace ?
var url = "https://simplement-e-funcs.azurewebsites.net/api/HttpTriggerCSharp2";

/* Donnez-moi ce JSON !
On entre dans le réel appel de l'API, sans pour autant formater quoi que ce soit.
Pour le moment, l'idée est de tester que tout fonctionne... On rendra ça plus joli ensuite ;)
 */
var responseAwait = "loading...";

function getJSON() {
    var xhr = new XMLHttpRequest(); //création de la requête
    xhr.open("GET", url); //requête GET pour ouvrir reqUrl en mode asynchrone


    xhr.addEventListener('readystatechange', function () { //vérification de l'état de la requête
        if (xhr.readyState == 4 && xhr.status == 200) { //si la requête est bien exécutée, et que la page existe...
            console.log("La requête fonctionne !"); //...on logge le tout dans la console pour tester ça, et le script continue de s'exécuter...
            console.log("JSON dans if : " + xhr.response); //...sans oublier de logger le JSON
            
            var json = JSON.parse(xhr.response); //on parse le JSON dans une variable faite pour ça

            console.log("var json = " + json);
            
            var htm = ""; //stocker le futur html dans une string
            
            //On parcourt le tableau du début à la fin, en insérant les données JSON dans les balises appropriées
            for (var i = 0; i < json.length; i++) { 
                htm += "<h1>" + json[i].Question + "</h1>";
                htm += "<p>" + json[i].Reponse + "</p>";
            }

            document.getElementById("helpBoxTest").innerHTML = htm; //Et ça part sur la page !
        } else {
            //On logge le statut et l'état de la requête
            console.log("code HTML : " + xhr.status);
            console.log("Etat de la requête : " + xhr.readyState);
        }
    });

    xhr.send(null); //on n'envoie rien
    console.log("réponse : " + xhr.responseText);
}

//Affichage (ou non) de la div qui contiendra les questions
function toggle() {
    getJSON();
    document.getElementById("helpBoxTest").classList.toggle("backToTheLight");
}