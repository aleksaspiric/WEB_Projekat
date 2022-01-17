import { Glumac } from "./glumac.js";
import { VideoKlub } from "./videoklub.js";

let k;

let prvaStrana = document.createElement("div");
prvaStrana.className ="prvaStrana";
document.body.appendChild(prvaStrana);

function crtajVK()
{
       
       let naslov = document.createElement("label");
       naslov.innerHTML = "WELCOME";
       naslov.className = "naslov";
       prvaStrana.appendChild(naslov);

       let prvaStranaDugme = document.createElement("div");
       prvaStranaDugme.className ="prvaStranaDugme";
       prvaStrana.appendChild(prvaStranaDugme);


       let vk= [];
       
       fetch("https://localhost:5001/VideoKlub/vratiSveVideoKlubove", {method:"GET"})
              .then(response => response.json())
              .then(videoklubovi => {
              videoklubovi.forEach(klub=>{
                     k = new VideoKlub(klub.id, klub.naziv, klub.trenutno);
                     
                     vk.push(k);

                     //k.crtaj(document.body);

                            let radioIme = document.createElement("div");
                            radioIme.className = "radioIme";
                            prvaStranaDugme.appendChild(radioIme);

                            let radio = document.createElement("input");
                            radio.className = "radioDugme";
                            radio.type = "radio";
                            radio.name = "radioTip";
                            radio.value = klub.id;
                            radioIme.appendChild(radio);

                            let labela = document.createElement("label");
                            labela.className = "labelaPrva";
                            labela.innerHTML = klub.naziv;
                            radioIme.appendChild(labela);
                     })
       
       let dugme = document.createElement("button");
       dugme.innerHTML = "Nastavi";
       dugme.className = "dugmePrvo";
       dugme.onclick = (ev) => klik(prvaStrana);
       prvaStrana.appendChild(dugme);



       });
}

function klik(prvaStrana)
{
       let vk = prvaStrana.querySelector("input[name='radioTip']:checked").value;
       
       fetch("https://localhost:5001/VideoKlub/vratiVideoKlub/"+vk, {method:"GET"})
              .then(response => response.json())
              .then(videklub => {
                     k = new VideoKlub(videklub.id, videklub.naziv, videklub.trenutno);

                     k.crtaj(document.body);
              })
}

crtajVK();



//     let glumci = [];
// let glumac = new Glumac("nesto","nesto",1999,"Kurbevac");
// let glumac2 = new Glumac("nesto","nesto",1999,"Kurbevac");
// let glumac3 = new Glumac("nesto","nesto",1999,"Kurbevac");
// glumci.push(glumac);
// glumci.push(glumac2);
// glumci.push(glumac3);
// glumci.forEach( p => p.crtajGlumca(document.body));

// glumac.crtajGlumca(document.body);
