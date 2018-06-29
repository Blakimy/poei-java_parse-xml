const req = new XMLHttpRequest();
req.open('GET', 'https://www.dealabs.com/rss/tout', false); 
req.send(null);

/*if (req.status === 200) {
    console.log("Réponse reçue: %s", req.responseText);
} else {
    console.log("Status de la réponse: %d (%s)", req.status, req.statusText);
}*/
/*req.overrideMimeType('text/xml');
*/
console.log(req.responseXML);
itm = req.responseXML.getElementsByTagName('item');
console.log(itm);