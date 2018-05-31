/* Aidez-moi !
Une petite fonction toute simple, pour appeler la fonction getJSON
et déclencher l'affichage d'un peu tout sur appui d'un bouton côté client
*/
function getHelp() {
    var url = "http://khemys.com/testingStuff/jsonArray.json";
    txt = getJSON(url);
    alert("Test : " + txt + "\n" + "URL : " + url);
}

/* Donnez-moi ce JSON !
On entre dans le réel appel de l'API, sans pour autant formater quoi que ce soit.
Pour le moment, l'idée est de tester que tout fonctionne... On rendra ça plus joli ensuite ;)
 */
function getJSON(reqUrl) {
    var xhr = new XMLHttpRequest(); //création de la requête
    xhr.onreadystatechange = function() { //vérification de l'état de la requête
        if (xhr.readyState == 4 && xhr.status == 200) { //si la requête est bien exécutée, et que la page existe...
            callback(xhr.responseText); // ...on récupère le texte brut contenu dans l'API
            console.log(xhr.responseText); //on logge également le tout dans la console pour tester ça !
        } else {
            return console.log("requête avec erreur : " + xhr.status); //s'il y a une erreur, on la logge
        }
    }
    xhr.open("GET", reqUrl, true); //requête GET pour ouvrir reqUrl en mode asynchrone
    xhr.send(null); //on n'envoie rien
    return xhr.responseText; //on retourne le contenu de la page
}