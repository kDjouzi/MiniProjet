//une URL isolée, serait-ce plus efficace ?
var url = "https://simplement-e-funcs.azurewebsites.net/api/HttpTriggerCSharp2";

//initialisation de la div contenant la FAQ 

//Création d'un booléen pour remplacer la Checkbox précédemment utilisée
var check = false;

//Génération de la div servant à déclencher l'affichage de la "fenêtre" helpBox
var FAQtoggler = document.createElement("div"); //Génération de la div
FAQtoggler.id = "FAQtoggler_kDjouziMiniProjet"; //Ajout d'un identifiant unique
FAQtoggler.setAttribute("onclick", "FAQtoggle_kDjouziMiniProjet()"); //Ajout du déclencheur onClick

//Ajout du point d'interrogation dans FAQtoggler
var inter = document.createTextNode("?");
FAQtoggler.appendChild(inter);

//Génération de la div helpBox
var helpBox = document.createElement("div");
helpBox.id = "helpBox_kDjouziMiniProjet";

/* Donnez-moi ce JSON !
Récupération et formatage du JSON avec balises HTML.
On n'oublie pas de logger le tout !
Téléchargement du JSON à l'ouverture de la page, pour éviter de le re-télécharger à chaque ouverture du spoiler
 */

var xhr = new XMLHttpRequest(); //création de la requête
xhr.open("GET", url); //requête GET pour ouvrir l'url en mode asynchrone

var body = document.body;

// [TEST] Génération de div
/* var testElem = document.createElement("div");
testElem.id = "thisIsATest";
testElem.style = "background-color:green;";
testElem.onmouseenter = "testFunc()";

var insideTheTestElem = document.createTextNode("C'est plus propre comme ça");

testElem.appendChild(insideTheTestElem);

body.appendChild(testElem);
*/


xhr.addEventListener('readystatechange', function () {
    //vérification de l'état de la requête

    if (xhr.readyState == 4 && xhr.status == 200) { //si la requête est bien exécutée, et que la page existe...

        console.log("La requête fonctionne !");
        console.log("JSON dans if : " + xhr.response);

        var json = JSON.parse(xhr.response); //...on parse le JSON dans une variable faite pour ça...

        console.log("var json = " + json.toString());

        var htm = ""; //stockage de code html à injecter

        //On parcourt le tableau du début à la fin, en insérant les données JSON dans les balises appropriées
        for (var i = 0; i < json.length; i++) {
            htm += "<h1>" + json[i].Question + "</h1>";
            htm += "<p>" + json[i].Reponse + "</p>";
        }

        document.getElementById("helpBox_kDjouziMiniProjet").innerHTML = htm; //...Et ça part sur la page !

    } else {
        //On logge le statut et l'état de la requête, pour attraper une erreur s'il y a lieu

        console.log("code HTML : " + xhr.status);
        console.log("Etat de la requête : " + xhr.readyState);
    }
});

xhr.send(null); //on n'envoie rien

//on lance l'injection du "bouton" et la helpBox dans le HTML
console.log("Construction de la HelpBox...");
generateHelpBoxAndButton();

function generateHelpBoxAndButton() {

    body.appendChild(FAQtoggler);
    body.appendChild(helpBox);

    console.log("HELPBOX CONSTRUITE");
}

//Affichage (ou non) de la div qui contiendra les questions
function FAQtoggle_kDjouziMiniProjet() {
    //mécanisme simple de checkbox avec le booléen
    if (check == true) { check = false } else { check = true };

    //utilisation du booléen pour lancer l'animation
    FAQanimate(check);

    //code de test : inclusion de la valeur de check dans les logs
    /*
    if (check == true) {
        console.log("Valeur de check => true");
    } else {
        console.log("Valeur de check => false");
    }
    */

}

function FAQanimate(cb) {
    //utilisation d'une variable dédiée pour les animations
    var div = helpBox;
    
    //choix de l'animation à déclancher
    if (cb == true) {

        //script d'animation d'entrée + fade-in

        //initialisation des valeurs de transparence et de position
        var pos = -300;
        div.style.right = "-300px";
        var opacity = 0;

        //créations des intervalles pour les animations
        var mvt = setInterval(posAnimate, 10);
        var opa = setInterval(opAnimate, 30);

        //animation de position
        function posAnimate() {
            if (pos == 10) {
                clearInterval(mvt);
            } else {
                pos += 10;
                div.style.right = pos.toString() + "px";
            }
        }

        //animation de transparence
        function opAnimate() {
            if (opacity >= 1) {
                clearInterval(opa);
            } else {
                opacity += 0.5;
                div.style.opacity = opacity.toString();
            }
        }

        console.log("Position : " + pos);
        //var div = document.getElementById("helpBox");
        console.log(opacity);

        if (pos != -300 || opacity != 0) {/* ne rien faire */ }

        //div.style.right = "10px";

    } else {
        //script d'animation de sortie + fade-out

        //initialisation des valeurs de transparence et de position
        var pos = 10;
        var opacity = 1;

        //créations des intervalles pour les animations
        var mvt = setInterval(posAnimate, 10);
        var opa = setInterval(opAnimate, 30);

        //animation de position
        function posAnimate() {
            if (pos == -300) {
                clearInterval(mvt);
            } else {
                pos -= 10;
                div.style.right = pos.toString() + "px";
            }

        }

        //animation de transparence
        function opAnimate() {
            if (opacity <= 0) {
                clearInterval(opa);
            } else {
                opacity -= 0.08;
                div.style.opacity = opacity.toString();
            }
        }

        console.log(opacity);

        var div = document.getElementById("helpBox_kDjouziMiniProjet");


        console.log("isexpanded n'est plus cochée.");
    }
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