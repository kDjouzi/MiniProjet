var url = "https://simplement-e-funcs.azurewebsites.net/api/HttpTriggerCSharp2";

function getHelp() {
    txt = getJSON(url)
    alert("Test : " + txt + "\n" + "URL : " + url);
}

function getJSON(reqUrl) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() { 
        if (xhr.readyState == 4 && xhr.status == 200) {
            callback(xhr.responseText);
        } else {
            return xhr.status;
        }
    }
    xhr.open("GET", reqUrl, true);
    xhr.send(null);
    console.log(xhr.responseText);
    return xhr.responseText;
}