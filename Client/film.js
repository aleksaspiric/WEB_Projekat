import { VideoKlub } from "./videoklub.js";
export class Film
{
    constructor(id,naziv,reziser, zanr, godina, ocena, opis, trajanje)
    {
        this.id = id;
        this.naziv= naziv;
        this.reziser= reziser;
        this.zanr= zanr;
        this.godina= godina;
        this.ocena= ocena;
        this.opis= opis;
        this.trajanje= trajanje;

        this.klub = null;
        this.glumci=[];
        this.miniKontejner= null;
    }

    dodajGlumca(glumac)
    {     
            this.glumci.push(glumac);
    }

    obrisiGlumce()
    {
        this.glumci.forEach(g=>
            {
                fetch("https://localhost:5001/Spoj/VratiGlumca/"+g.id, {method:"GET"})
                .then(response => response.json())
                .then(gs => {
                    fetch("https://localhost:5001/Spoj/ObrisiGlumcaIzFilma/"+this.id+"/"+gs.id, {
                    method: "DELETE",
                     })
                })
                this.glumci.pop(g);
            })
    }

    crtajFilm(host, kid)
    {
        this.miniKontejner= document.createElement("div");
        this.miniKontejner.className="divFilm";
        host.appendChild(this.miniKontejner);

        const formaFilm= document.createElement("div");
        formaFilm.className="divFormaFilma";
        this.miniKontejner.appendChild(formaFilm);
     

        const divNaziv= document.createElement("div");
        divNaziv.className="divNaziv";
        formaFilm.appendChild(divNaziv);

        const divIme= document.createElement("label");
        divIme.className="divIme";
        divNaziv.appendChild(divIme);
        
        divIme.innerHTML=this.naziv;

        
        const divReziser= document.createElement("label");
        divNaziv.appendChild(divReziser);
        divReziser.innerHTML ="Reziser: "+this.reziser;

        const divZanr= document.createElement("label");
        divZanr.innerHTML="-"+this.zanr;
        divNaziv.appendChild(divZanr);

        const divOcena= document.createElement("label");
        divOcena.innerHTML=this.ocena+"/10 ⭐";
        divNaziv.appendChild(divOcena);


        const divDugmici= document.createElement("div");
        divDugmici.className="divDugmici";
        divNaziv.appendChild(divDugmici);

        
        const formaZaGlumce= document.createElement("div");
        formaZaGlumce.className="divZaGlumce";
        this.miniKontejner.appendChild(formaZaGlumce);
        

        const prikazBut= document.createElement("button");
        prikazBut.innerHTML="Prikaz";
        prikazBut.className="but";
        prikazBut.classList.add("pIo");
        divDugmici.appendChild(prikazBut);
        var i=0;
        prikazBut.onclick=(el=>
            {    
                i++;
                if(i<2)
                {  
                    this.prikazFilma2(formaZaGlumce);
                }
            })

        const deleteBut= document.createElement("button");
        deleteBut.innerHTML="Obrisi";
        deleteBut.className="but";
        deleteBut.classList.add("pIo");
        divDugmici.appendChild(deleteBut);

        deleteBut.onclick=(el=>
            {
                this.obrisiGlumce();

                    fetch("https://localhost:5001/Film/IzbrisiFilm/"+kid+"/"+this.id, {
                        method: "DELETE",
                    }).then(p=>
                        { 
                            if(!p.ok)
                                alert("Neuspelo brisanje !");
                        })
                    
            })

        

    }
    
    izmenaFilma(host)
    {
        const bot = host.querySelector(".formaFilma");
        if(bot!=null)
            host.removeChild(bot);

        const formaFilma= document.createElement("div");
        formaFilma.className="formaFilma";
        host.appendChild(formaFilma);


        const nazivLab= document.createElement("label");
        nazivLab.innerHTML="Naziv filma:";
        formaFilma.appendChild(nazivLab);

        const nazivInput= document.createElement("input");
        nazivInput.className="nazivInput";
        formaFilma.appendChild(nazivInput);
        nazivInput.value=this.naziv;

        const reziserLab= document.createElement("label");
        reziserLab.innerHTML="Reziser:";
        reziserLab.classList.add("pomeraj");
        formaFilma.appendChild(reziserLab);

        const reziserInput= document.createElement("input");
        reziserInput.className="reziserInput";
        formaFilma.appendChild(reziserInput);
        reziserInput.value= this.reziser;

        const zanrLab= document.createElement("label");
        zanrLab.innerHTML="Tip:";
        zanrLab.classList.add("pomeraj");
        formaFilma.appendChild(zanrLab);

        const select2= document.createElement("select");
        select2.className="select2";
        let opcija;
        const zanrovi= ["Thriller","Horror","Comedy", "Action", "Romance", "Sci-Fi","Adventure","Crime","Drama","Fantasy","Mystery"];
        zanrovi.forEach(el=>
            {
                opcija= document.createElement("option");
                opcija.innerHTML= el;
                select2.appendChild(opcija);
            })
        
        select2.value=this.zanr;
        formaFilma.appendChild(select2);

        const godLab=document.createElement("label");
        godLab.innerHTML="Godina:";
        godLab.classList.add("pomeraj");
        formaFilma.appendChild(godLab);
        

        const godInput= document.createElement("input");
        godInput.type="number";
        godInput.className="godInput";
        godInput.value=this.godina;
        formaFilma.appendChild(godInput);

        const ocenaLab= document.createElement("label");
        ocenaLab.innerHTML="Ocena:";
        ocenaLab.classList.add("pomeraj");
        formaFilma.appendChild(ocenaLab);

        const select3= document.createElement("select");
        select3.className="select3";
        for(let i=1;i<=10;i++)
            {
                opcija= document.createElement("option");
                opcija.innerHTML= i;
                select3.appendChild(opcija);
            }

            formaFilma.appendChild(select3);
        select3.value=this.ocena;

        const opisLab= document.createElement("label");
        opisLab.innerHTML="Opis:";
        opisLab.classList.add("pomeraj");
        formaFilma.appendChild(opisLab);

        const opisInput= document.createElement("textarea");
        opisInput.className="opisInput";
        opisInput.value= this.opis;
        formaFilma.appendChild(opisInput); 

        const vremeLab= document.createElement("label");
        vremeLab.innerHTML="Trajanje:";
        vremeLab.classList.add("pomeraj");
        formaFilma.appendChild(vremeLab);

        const divTrajanje= document.createElement("div");
        divTrajanje.className="divTrajanje";
        formaFilma.appendChild(divTrajanje);

        const vremeInput= document.createElement("input");
        vremeInput.type="number";
        vremeInput.className="vremeInput";
        vremeInput.value=this.trajanje;
        divTrajanje.appendChild(vremeInput);

        const min= document.createElement("label");
        min.innerHTML="min";
        divTrajanje.appendChild(min);

        const divButtons= document.createElement("div");
        divButtons.className="divButtons";
        formaFilma.appendChild(divButtons);

        const butNazad= document.createElement("button");
        butNazad.innerHTML="Nazad";
        butNazad.onclick=(el=>{
            this.crtajBot(2);
        })
        butNazad.className="but";
        butNazad.classList.add("pIo");
        divButtons.appendChild(butNazad);

        const butDodaj= document.createElement("button");
        butDodaj.innerHTML="Izmeni film";
        butDodaj.className="but";
        butDodaj.classList.add("pIo");
        divButtons.appendChild(butDodaj);
        
        butDodaj.onclick=(el=>
            {
                this.izmeniFilm(formaFilma);
            })
    }

    prikazFilma2(host)
    {
        fetch("https://localhost:5001/Spoj/vratiGlumceIzFilma/"+this.id, {method:"GET"})
            .then(response => response.json())
            .then(gs => {
                gs.forEach(g=>{
                    this.dodajGlumca(g);
                    
                });
                
                this.crtajGlumce(gs, host);//dobro
            });
        
    }

    crtajGlumce(glumci, host)
    {
        let prostor = document.createElement("div");
        prostor.className = "prostor";
        host.appendChild(prostor);

        glumci.forEach(g=>
            {           
                let prostorZaGlumca = document.createElement("div");
                prostorZaGlumca.className = "prostorZaGlumca";
                prostor.appendChild(prostorZaGlumca); 
    
                fetch("https://localhost:5001/Spoj/VratiGlumca/"+g.id, {method:"GET"})
                .then(response => response.json())
                .then(gs => {
                    console.log(gs);  
                    const imeLab= document.createElement("label");
                    imeLab.innerHTML="Ime glumca:" + gs.ime;
                    prostorZaGlumca.appendChild(imeLab);

                    const prezimeLab= document.createElement("label");
                    prezimeLab.innerHTML="Prezime glumca:" + gs.prezime;
                    prostorZaGlumca.appendChild(prezimeLab);
                    
                    const godLab= document.createElement("label");
                    godLab.innerHTML="Godina rodjenja glumca:" + gs.godRodjenja;
                    prostorZaGlumca.appendChild(godLab);
                    
                    const mestoLab= document.createElement("label");
                    mestoLab.innerHTML="Mesto rodjenja glumca:" + gs.mestoRodjenja;
                    prostorZaGlumca.appendChild(mestoLab);

                    const linija= document.createElement("label");
                    linija.innerHTML="______________________";
                    prostorZaGlumca.appendChild(linija);
                });
            })


        const dugmeIzmeni= document.createElement("button");
        dugmeIzmeni.innerHTML="Izmeni film";
        dugmeIzmeni.className="but";
        dugmeIzmeni.classList.add("pIo");
        prostor.appendChild(dugmeIzmeni);
        var i=0;
        dugmeIzmeni.onclick=(el=>
            {
                i++;
                if(i<2)
                {
                    this.izmenaFilma(host);  
                }
            })
    }

    izmeniFilm(host)
    {
        const naziv= host.querySelector(".nazivInput").value;
        if(naziv.length==0)
        {
            alert("Unesite naziv filma ! ");
            return;
        }
        
        const reziser= host.querySelector(".reziserInput").value;
        if(reziser.length==0)
        {
        alert("Unesite rezisera filma ! ");
        return;
        }

        const tip= host.querySelector(".select2").value;
        

        const god= host.querySelector(".godInput").value;
        if(god.length==0 || god<1800)
        {
            alert("Unesite validnu godinu izlaska filma");
            return;
        }
        

        const ocena= host.querySelector(".select3").value;
    

        const opis= host.querySelector(".opisInput").value;
        if(opis.length==0)
        {
            alert("Unesite opis filma ! ");
            return;
        }

        const trajanje= host.querySelector(".vremeInput").value;
        if(trajanje.length==0)
        {
            alert("Unesite vreme trajanja filma ! ");
            return;
        }
        
        let film = ({
            id: this.id, naziv: naziv, reziser: reziser, zanr: tip, godina: god, ocena: ocena, opis: opis, trajanje: trajanje
        })

        fetch("https://localhost:5001/Film/izmeniFilm" ,{
            method:"PUT",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(film)
        })

    }
}
