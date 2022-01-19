
import { VideoKlub } from "./videoklub.js";

let k;

function crtajVK()
{
       const form = document.body.querySelector(".strana");
       if(form!=null)
              document.body.removeChild(form);

       let prvaStrana = document.createElement("div");
       prvaStrana.className ="prvaStrana";
       document.body.appendChild(prvaStrana);

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
       
       let dugmeNastavi = document.createElement("button");
       dugmeNastavi.innerHTML = "Nastavi";
       dugmeNastavi.className = "dugmePrvo";
       dugmeNastavi.onclick = (ev) => klik(prvaStrana);
       prvaStrana.appendChild(dugmeNastavi);

       let dugmeDodavanje = document.createElement("button");
       dugmeDodavanje.innerHTML = "Dodaj Videoklub";
       dugmeDodavanje.className = "dugmePrvo";
       dugmeDodavanje.onclick = (ev) => klikDodajVK();
       prvaStrana.appendChild(dugmeDodavanje);

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

function klikDodajVK()
{
       const form = document.body.querySelector(".prvaStrana");
       if(form!=null)
              document.body.removeChild(form);

       let strana = document.createElement("div");
       strana.className ="strana";
       document.body.appendChild(strana);

       
       const nazivLab= document.createElement("h1");
       nazivLab.innerHTML="Naziv kluba:";
       strana.appendChild(nazivLab);
       
       const nazivInput= document.createElement("input");
       nazivInput.className="nazivInput";
       strana.appendChild(nazivInput);
       
       const dugmeNazad= document.createElement("button");
       dugmeNazad.innerHTML="Nazad";
       dugmeNazad.className ="pIo";
       strana.appendChild(dugmeNazad);
       dugmeNazad.onclick=(el=>{
           crtajVK();
       })

       let dugmeDodaj = document.createElement("button");
       dugmeDodaj.innerHTML = "Dodaj ";
       dugmeDodaj.className = "pIo";
       dugmeDodaj.onclick = (ev) => klikDodajVideoKlub(strana);
       strana.appendChild(dugmeDodaj);

}

function klikDodajVideoKlub(host)
{

       const naziv= host.querySelector(".nazivInput").value;
       if(naziv.length==0)
       {
           alert("Unesite naziv videokluba ! ");
           return;
       }

       let videoklub = ({
              naziv: naziv
       })
       fetch("https://localhost:5001/VideoKlub/dodajVideoKlub" ,{
              method:"POST",
              headers:{
                  'Content-Type':'application/json'
              },
              body:JSON.stringify(videoklub)
       })
       .then(res =>{
              if(res.status != 200)
              {
                  alert("Greska!");
                  return;
              }
          });
}

crtajVK();



