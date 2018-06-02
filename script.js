//une URL isolée, serait-ce plus efficace ?
var url = "https://simplement-e-funcs.azurewebsites.net/api/HttpTriggerCSharp2";

/* Donnez-moi ce JSON !
Récupération et formatage du JSON avec balises HTML.
On n'oublie pas de logger le tout !
 */

function getJSON() {
    var xhr = new XMLHttpRequest(); //création de la requête
    xhr.open("GET", url); //requête GET pour ouvrir l'url en mode asynchrone


    xhr.addEventListener('readystatechange', function () { 
        //vérification de l'état de la requête

        if (xhr.readyState == 4 && xhr.status == 200) { //si la requête est bien exécutée, et que la page existe...
           
            console.log("La requête fonctionne !");
            console.log("JSON dans if : " + xhr.response);
            
            var json = JSON.parse(xhr.response); //...on parse le JSON dans une variable faite pour ça...

            console.log("var json = " + json);
            
            var htm = ""; //stockage de code html à injecter
            
            //On parcourt le tableau du début à la fin, en insérant les données JSON dans les balises appropriées
            for (var i = 0; i < json.length; i++) { 
                htm += "<h1>" + json[i].Question + "</h1>";
                htm += "<p>" + json[i].Reponse + "</p>";
            }

            document.getElementById("helpBox").innerHTML = htm; //...Et ça part sur la page !

        } else {
            //On logge le statut et l'état de la requête, pour attraper une erreur s'il y a lieu
            
            console.log("code HTML : " + xhr.status);
            console.log("Etat de la requête : " + xhr.readyState);
        }
    });

    xhr.send(null); //on n'envoie rien

    console.log("réponse : " + xhr.responseText);
}

//Affichage (ou non) de la div qui contiendra les questions
function FAQtoggle() {

    getJSON();

    document.getElementById("helpBox").classList.toggle("backToTheLight");
}

//création de code couleur hexadécimal random
function randomColorCode() {

    var letters = '0123456789ABCDEF';
    var color = '#';

    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}

/**   on va faire des tuiles de couleur pour "remplir" la page ;)
// le but principal est de vérifier que les algorithmes et styles fonctionnent comme prévu
*/
document.addEventListener("DOMContentLoaded", populate()); //une fois que tout le code de la page est chargé, on ajoute des "boîtes" de couleur


function populate() {

    var htm = "";

    for (var i = 0; i < 50; i++) {
        htm += "<div class=\"square\" style=\"background-color:" + randomColorCode().toString() + ";\"></div>"
    }

    document.getElementById("soManyBoxes").innerHTML = htm;
}

