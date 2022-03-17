let link= ['rezeptole.html','rezeptrebecca.html','rezeptchristian.html']
let photos= ['img/xihongshi.jpeg','img/Reibekuchen_mit_Apfelmus.jpg','img/bauerntopf.jpg']


function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }

  
}
function random(){
  let rand= Math.floor(Math.random()*link.length);
  document.getElementById('rezeptdesTages').href=(link[rand]);
}

function randomrecipe(){
  for (i=0; i<link.length; i++)
  document.getElementById('bild').src=(photos[0]);
  document.getElementById('title').innerHTML=(`Xihongshi Jidan`);
  document.getElementById('description').innerText=`Xihongshi Jidan ist einfach und schnell zubereitetes Hauptgericht.
  Dieses Gericht bringt unterschiedliche Aromen auf außergewöhnliche Weise zusammen,`;
  document.getElementById('button').href=(link[0]);
  setTimeout(randomrecipe2,5000);
}

function randomrecipe2(){
  document.getElementById('bild').src=(photos[1]);
  document.getElementById('title').innerHTML=`Großmutter's Reibekuchen`;
  document.getElementById('description').innerText=`Auf keinem Jahrmakrt dürfen sie fehlen: Reibekuchen. 
  Hier kommt der Klassiker, wir verraten Dir, wie deine Reibekuchen am besten gelingen.`;
  document.getElementById('button').href=(link[1]);
  setTimeout(randomrecipe3,5000);
}

function randomrecipe3(){
  document.getElementById('bild').src=(photos[2]);
  document.getElementById('title').innerHTML=`Bauerntopf`;
  document.getElementById('description').innerText=`Ein einfach gehaltener, deftiger Eintopf für die ganze Familie.
  Das Rezept eignet sich für viele Anlässe und lässt sich gut vorbereiten und aufwärmen.`;
  document.getElementById('button').href=(link[2]);
  setTimeout(randomrecipe,5000);
}
