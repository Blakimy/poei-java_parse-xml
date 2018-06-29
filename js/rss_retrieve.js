const req = new XMLHttpRequest();
req.open('GET', 'https://www.dealabs.com/rss/tout', false); 
req.send(null);
console.log(req.responseXML);
itm = req.responseXML.getElementsByTagName('item').innerHTML;
console.log(itm);