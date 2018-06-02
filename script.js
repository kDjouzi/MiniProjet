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
    
    
    xhr.addEventListener('readystatechange', function() { //vérification de l'état de la requête
        if (xhr.readyState == 4 && xhr.status == 200) { //si la requête est bien exécutée, et que la page existe...
            console.log("La requête fonctionne !"); //...on logge le tout dans la console pour tester ça, et le script continue de s'exécuter...
            console.log("JSON dans if : " + xhr.response); //...sans oublier de logger le JSON
            document.getElementById("helpBoxTest").innerHTML = xhr.responseText; //test de la manipulation de HTML
        } else {
            //On logge le statut et l'état de la requête
            console.log("code HTML : " + xhr.status); 
            console.log("Etat de la requête : " + xhr.readyState); 
        }
    });

    xhr.send(null); //on n'envoie rien
    console.log("réponse : " + xhr.responseText);
}

function toggle(){
    getJSON();
    document.getElementById("helpBoxTest").classList.toggle("backToTheLight");
}