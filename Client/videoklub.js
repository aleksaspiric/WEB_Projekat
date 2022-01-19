import { Film } from "./film.js";
import { Glumac } from "./glumac.js";

export class VideoKlub
{
    constructor(id,naziv,trenutno,filmovi)
    {
        if(id)
        {
            this.id=id;
        }
        if(naziv)
        {
            this.naziv=naziv;
        }
        if(trenutno)
        {
            this.trenutno=trenutno;
        }
        else{
            trenutno=0;
        }
        if(filmovi)
        {
            this.filmovi = filmovi;
        }
        else{
            this.filmovi =[];
        }

        this.container= null;
    }

    crtaj(host)
    {
        const p = host.querySelector(".prvaStrana");
        if(p!=null)
            host.removeChild(p);

        this.container= document.createElement("div");
        this.container.className="container";
        
        host.appendChild(this.container);

        this.crtajTop();
        this.crtajBot(1);
       
    }

    crtajTop()
    {
        const top= document.createElement("div");
        top.className="top";
        this.container.appendChild(top);


        const naz= document.createElement("h1");
        naz.innerHTML="Video klub: "+ this.naziv;
        naz.className="nazivKluba";
        top.appendChild(naz);


        const divOpcija= document.createElement("div");
        divOpcija.className="divOpcija";
        top.appendChild(divOpcija);

        const pocetnaStrana= document.createElement("div");
        pocetnaStrana.innerHTML="POCETNA";
        pocetnaStrana.className="estetikDugme";

        const pocetnaLink= document.createElement("a");
        pocetnaLink.className="link";
        pocetnaLink.href="#";
        pocetnaLink.appendChild(pocetnaStrana);
        divOpcija.appendChild(pocetnaLink);

        pocetnaStrana.onclick=(el=>{
            this.crtajBot(2);
        })

        const dodajFilm= document.createElement("div");
        dodajFilm.innerHTML="DODAJ NOVI FILM";
        dodajFilm.classList.add("estetikDugme");

        const link = document.createElement("a");
        link.className = "link";
        link.href = "#";
        link.appendChild(dodajFilm);
       
        divOpcija.appendChild(link);
        dodajFilm.onclick=(el=>
            {
                let bot= this.container.querySelector(".botZaPrikazFilma");
                if(bot!=null)
                    this.container.removeChild(bot);

                bot= this.container.querySelector(".formAdd");
                if(bot!=null)
                this.container.removeChild(bot);
                
                bot= this.container.querySelector(".bot3");
                if(bot!=null)
                this.container.removeChild(bot);

                bot= this.container.querySelector(".botPrikaz");
                if(bot!=null)
                this.container.removeChild(bot);
                        
                const bot4= this.container.querySelector(".bot4");
                if(bot4!=null)
                    this.container.removeChild(bot4);

                const bot5= this.container.querySelector(".bot5");
                if(bot5!=null)
                        this.container.removeChild(bot5);
    
                const formAdd= document.createElement("div");
                formAdd.className="formAdd";
                this.container.appendChild(formAdd);

                const formDodaj= document.createElement("div");
                formDodaj.className="formDodaj";
                formAdd.appendChild(formDodaj);

                const nazivLab= document.createElement("label");
                nazivLab.innerHTML="Naziv filma:";
                formDodaj.appendChild(nazivLab);

                const nazivInput= document.createElement("input");
                nazivInput.className="nazivInput";
                formDodaj.appendChild(nazivInput);

                const reziserLab= document.createElement("label");
                reziserLab.innerHTML="Reziser:";
                reziserLab.classList.add("pomeraj");
                formDodaj.appendChild(reziserLab);

                const reziserInput= document.createElement("input");
                reziserInput.className="reziserInput";
                formDodaj.appendChild(reziserInput);

                const zanrLab= document.createElement("label");
                zanrLab.innerHTML="Tip:";
                zanrLab.classList.add("pomeraj");
                formDodaj.appendChild(zanrLab);

                const select2= document.createElement("select");
                select2.className="select2";
                zanrovi.forEach(el=>
                    {
                        opcija= document.createElement("option");
                        opcija.innerHTML= el;
                        select2.appendChild(opcija);
                    })

                formDodaj.appendChild(select2);

                const godLab=document.createElement("label");
                godLab.innerHTML="Godina:";
                godLab.classList.add("pomeraj");
                formDodaj.appendChild(godLab);

                const godInput= document.createElement("input");
                godInput.type="number";
                godInput.className="godInput";
                formDodaj.appendChild(godInput);

                const ocenaLab= document.createElement("label");
                ocenaLab.innerHTML="Ocena:";
                ocenaLab.classList.add("pomeraj");
                formDodaj.appendChild(ocenaLab);

                const select3= document.createElement("select");
                select3.className="select3";
                for(let i=1;i<=10;i++)
                    {
                        opcija= document.createElement("option");
                        opcija.innerHTML= i;
                        select3.appendChild(opcija);
                    }

                formDodaj.appendChild(select3);
                
                const opisLab= document.createElement("label");
                opisLab.innerHTML="Opis:";
                opisLab.classList.add("pomeraj");
                formDodaj.appendChild(opisLab);

                const opisInput= document.createElement("textarea");
                opisInput.className="opisInput";
                formDodaj.appendChild(opisInput); 

                const vremeLab= document.createElement("label");
                vremeLab.innerHTML="Trajanje:";
                vremeLab.classList.add("pomeraj");
                formDodaj.appendChild(vremeLab);

                const divTrajanje= document.createElement("div");
                divTrajanje.className="divTrajanje";
                formDodaj.appendChild(divTrajanje);

                const vremeInput= document.createElement("input");
                vremeInput.type="number";
                vremeInput.className="vremeInput";
                divTrajanje.appendChild(vremeInput);

                const min= document.createElement("label");
                min.innerHTML="min";
                divTrajanje.appendChild(min);
                

                const divButtons= document.createElement("div");
                divButtons.className="divButtons";
                formDodaj.appendChild(divButtons);

                const butNazad= document.createElement("button");
                butNazad.innerHTML="Nazad";
                butNazad.onclick=(el=>{
                    this.crtajBot(2);
                })
                butNazad.className="but";
                butNazad.classList.add("but2");
                divButtons.appendChild(butNazad);

                const butDodaj= document.createElement("button");
                butDodaj.innerHTML="Dodaj film";
                butDodaj.className="but";
                butDodaj.classList.add("but2");
                divButtons.appendChild(butDodaj);
                
                butDodaj.onclick=(el=>
                    {             
                        this.dodajIzmeniFilm(formDodaj);
                    })
            }
        );

        const sortPoOceni= document.createElement("div");
        sortPoOceni.innerHTML="SORTIRAJ PREMA OCENI";
        sortPoOceni.classList.add("estetikDugme");

        const link2 = document.createElement("a");
        link2.className = "link";
        link2.href = "#";
        link2.appendChild(sortPoOceni);
       
        divOpcija.appendChild(link2);

        sortPoOceni.onclick= (el=>
            {
                this.sortirajFilmove();
            }
        );

        const lab= document.createElement("label");
        lab.innerHTML="KATEGORIJE:";
        lab.className="sort";
        const zanr= document.createElement("div");

        let zanrSort= document.createElement("select");
        zanrSort.className="zanrSort";
        divOpcija.appendChild(zanrSort);
        let opcija;

        const zanrovi= ["Thriller","Horror","Comedy", "Action", "Romance", "Sci-Fi","Adventure","Crime","Drama","Fantasy","Mystery"];
        zanrovi.forEach(el=>
            {
                opcija= document.createElement("option");
                opcija.innerHTML= el;
                zanrSort.appendChild(opcija);
            })

        const labela= document.createElement("button");
        labela.innerHTML="➔";
        labela.className="lbl";
        labela.onclick= (el=>
            {
                this.crtajBot(3);
            })

        zanr.appendChild(lab);
        zanr.appendChild(zanrSort);
        zanr.appendChild(labela);
        divOpcija.appendChild(zanr);

        
        const glumciOpcija= document.createElement("div");
        glumciOpcija.innerHTML="GLUMCI";
        glumciOpcija.classList.add("estetikDugme");

        const link3 = document.createElement("a");
        link3.className = "link";
        link3.href = "#";
        link3.appendChild(glumciOpcija);
       
        divOpcija.appendChild(link3);
        var i = 0;

        glumciOpcija.onclick= (el=>
            {
                this.prikaziGlumce();
            }
        );

        const dodajGlumca= document.createElement("div");
        dodajGlumca.innerHTML="DODAJ NOVOG GLUMCA";
        dodajGlumca.classList.add("estetikDugme");

        const link5 = document.createElement("a");
        link5.className = "link";
        link5.href = "#";
        link5.appendChild(dodajGlumca);
       
        divOpcija.appendChild(link5);
        dodajGlumca.onclick=(el=>
            {
                let bot= this.container.querySelector(".botZaPrikazFilma");
                if(bot!=null)
                    this.container.removeChild(bot);

                bot= this.container.querySelector(".formAdd");
                if(bot!=null)
                this.container.removeChild(bot);
                
                bot= this.container.querySelector(".bot3");
                if(bot!=null)
                this.container.removeChild(bot);

                bot= this.container.querySelector(".botPrikaz");
                if(bot!=null)
                this.container.removeChild(bot);
                        
                const bot4= this.container.querySelector(".bot4");
                if(bot4!=null)
                    this.container.removeChild(bot4);
                    
                    
                const bot5= document.createElement("div");
                bot5.className="bot5";
                this.container.appendChild(bot5);

                const formDodajG= document.createElement("div");
                formDodajG.className="formDodajG";
                bot5.appendChild(formDodajG);

                const imeLab= document.createElement("label");
                imeLab.innerHTML="Ime glumca:";
                formDodajG.appendChild(imeLab);

                const imeInput= document.createElement("input");
                imeInput.className="imeInput";
                formDodajG.appendChild(imeInput);
                
                const prezimeLab= document.createElement("label");
                prezimeLab.innerHTML="Prezime glumca:";
                formDodajG.appendChild(prezimeLab);

                const prezimeInput= document.createElement("input");
                prezimeInput.className="prezimeInput";
                formDodajG.appendChild(prezimeInput);
                
                const godLab=document.createElement("label");
                godLab.innerHTML="Godina rodjenja glumca:";
                godLab.classList.add("pomeraj");
                formDodajG.appendChild(godLab);

                const godInput= document.createElement("input");
                godInput.type="number";
                godInput.className="godInput";
                formDodajG.appendChild(godInput);

                
                const mestoLab= document.createElement("label");
                mestoLab.innerHTML="Mesto rodjenja glumca:";
                formDodajG.appendChild(mestoLab);

                const mestoInput= document.createElement("input");
                mestoInput.className="mestoInput";
                formDodajG.appendChild(mestoInput);
                

                const divButtons= document.createElement("div");
                divButtons.className="divButtons";
                formDodajG.appendChild(divButtons);

                const butNazad= document.createElement("button");
                butNazad.innerHTML="Nazad";
                butNazad.onclick=(el=>{
                    this.crtajBot(2);
                })
                butNazad.className="but";
                butNazad.classList.add("but2");
                divButtons.appendChild(butNazad);

                const butDodaj= document.createElement("button");
                butDodaj.innerHTML="Dodaj glumca";
                butDodaj.className="but";
                butDodaj.classList.add("but2");
                divButtons.appendChild(butDodaj);
                
                butDodaj.onclick=(el=>
                    {             
                        this.dodajGlumca(formDodajG);
                    })
            }
        );

    }


    crtajBot(i)
    {
        const formAdd= this.container.querySelector(".formAdd");//ZA DODAJ FILM
        if(formAdd!=null)
            this.container.removeChild(formAdd);

        const bot1= this.container.querySelector(".botZaPrikazFilma");//ZA POCETNU
        if(bot1!=null)
            this.container.removeChild(bot1);

        const bot3= this.container.querySelector(".bot3");
        if(bot3!=null)
            this.container.removeChild(bot3);

        const botPrikaz= this.container.querySelector(".botPrikaz");
        if(botPrikaz!=null)
            this.container.removeChild(botPrikaz);
            
        const bot4= this.container.querySelector(".bot4");
        if(bot4!=null)
            this.container.removeChild(bot4);
        
        const bot5= this.container.querySelector(".bot5");
        if(bot5!=null)
            this.container.removeChild(bot5);
            
            

        let bot= document.createElement("div");
        bot.className="botZaPrikazFilma";
        this.container.appendChild(bot); 

        let film;

        if(i==1)
        {
            fetch("https://localhost:5001/Film/vratiSveFilmoveIzKluba/"+this.id, {method:"GET"})
            .then(response=> response.json())
            .then(q=>{
                q.forEach(el=>{
                    film= new Film(el.id, el.naziv, el.reziser, el.zanr, el.godina, el.ocena, el.opis, el.trajanje);
                    this.dodajFilm(film);

                    film.crtajFilm(bot, this.id);
                })
            })
        }
        else if(i==2)
        {
            this.filmovi.forEach(el=>
                {
                    el.crtajFilm(bot, this.id);
                })
        }
        else
        {
            const zanrSort= this.container.querySelector(".zanrSort").value;
            this.filmovi.forEach(el=>
                {
                    if(el.zanr==zanrSort)
                        el.crtajFilm(bot, this.id);
                })
        }
    }

    dodajFilm(film)
    {
        this.filmovi.push(film);
    }

    sortirajFilmove()
    {
        const bot2= this.container.querySelector(".formAdd");
        if(bot2!=null)
            this.container.removeChild(bot2);

        const bot1= this.container.querySelector(".botZaPrikazFilma");
        if(bot1!=null)
            this.container.removeChild(bot1);

        const botPrikaz= this.container.querySelector(".botPrikaz");
        if(botPrikaz!=null)
            this.container.removeChild(botPrikaz);

        const bot4= this.container.querySelector(".bot4");
        if(bot4!=null)
            this.container.removeChild(bot4);
            
        const bot5= this.container.querySelector(".bot5");
        if(bot5!=null)
            this.container.removeChild(bot5);
    
        let bot3= document.createElement("div");
        bot3.className="bot3";
        this.container.appendChild(bot3);
        let red;
        let ocenaRed;
        let kockica;
        let proc;

        let sortNiz=[]
        this.filmovi.forEach(el=>{
            sortNiz.push(el);
        })

        sortNiz.sort(function(a,b){
            return b.ocena - a.ocena
        })

        sortNiz.forEach(el=>
            {
                red=document.createElement("div");
                red.className="red2";
                bot3.appendChild(red);
                el.crtajFilm(red, this.id);

                ocenaRed= document.createElement("div");
                ocenaRed.className="ocenaRed";
                red.appendChild(ocenaRed);

                for(let i=1;i<=1;i++)
                {
                    kockica=document.createElement("div");
                    ocenaRed.appendChild(kockica);

                    
                    let opisL=document.createElement("label");
                    kockica.appendChild(opisL);
                    opisL.className ="opisL";
                    opisL.innerHTML=el.opis;
               
                    kockica.classList.add("kockica");
                    if(i<=el.ocena)
                    {
                        kockica.className="bojiKockicu";
                    }
                }
                proc= document.createElement("div");
                ocenaRed.appendChild(proc);
                proc.className="proc";
                proc.innerHTML= el.ocena+"/10 ⭐";

            })
    }

    prikaziGlumce()
    {
        const formAdd = this.container.querySelector(".formAdd");
        if(formAdd!=null)
            this.container.removeChild(formAdd);

        const bot1= this.container.querySelector(".botZaPrikazFilma");
        if(bot1!=null)
            this.container.removeChild(bot1);
            
        const bot3= this.container.querySelector(".bot3");//ZA SORTIRANJE BOTTOM
        if(bot3!=null)
            this.container.removeChild(bot3);

        const botPrikaz= this.container.querySelector(".botPrikaz");
        if(botPrikaz!=null)
            this.container.removeChild(botPrikaz);
            
        const bot5= this.container.querySelector(".bot5");
        if(bot5!=null)
            this.container.removeChild(bot5);
            
        let bot4= document.createElement("div");
        bot4.className="bot4";
        this.container.appendChild(bot4);

        
        fetch("https://localhost:5001/Glumac/VratiGlumce" ,{method:"GET"})
        .then(response=> response.json())
        .then(glumci=>{
            this.iscrtajGlumce(glumci, bot4);
        })

    }

    iscrtajGlumce(glumci, bot4)
    {

        glumci.forEach(gs=>
            {
                let forma = document.createElement("div");
                forma.className ="forma";
                bot4.appendChild(forma);

                let space = document.createElement("div");
                space.className ="space";
                forma.appendChild(space);
        
                const imeLab= document.createElement("label");
                imeLab.innerHTML="Ime glumca:" + gs.ime;
                space.appendChild(imeLab);

                const prezimeLab= document.createElement("label");
                prezimeLab.innerHTML="Prezime glumca:" + gs.prezime;
                space.appendChild(prezimeLab);
                
                const godLab= document.createElement("label");
                godLab.innerHTML="Godina rodjenja glumca:" + gs.godRodjenja;
                space.appendChild(godLab);
                
                const mestoLab= document.createElement("label");
                mestoLab.innerHTML="Mesto rodjenja glumca:" + gs.mestoRodjenja;
                space.appendChild(mestoLab);

                const linija= document.createElement("label");
                linija.innerHTML="______________________";
                space.appendChild(linija);

                const dugmedgf= document.createElement("button");
                dugmedgf.innerHTML="Dodaj glumca u film";
                dugmedgf.className="butDGF";
                dugmedgf.classList.add("but2");
                space.appendChild(dugmedgf);

                var i =0;

                dugmedgf.onclick=(el=>
                {
                    i++;
                    if(i<2)
                    {
                        this.dodajGlumcaUFilm(gs, forma);
                    }
                })
            })
    }

    dodajGlumcaUFilm(glumac, forma)
    {
        
        let space2 = document.createElement("div");
        space2.className ="space2";
        forma.appendChild(space2);

        this.filmovi.forEach(f=>{
            let radioIme = document.createElement("div");
            radioIme.className = "radioIme";
            space2.appendChild(radioIme);

            let radio = document.createElement("input");
            radio.type = "radio";
            radio.name = "radioTip";
            radio.value = f.id;
            radioIme.appendChild(radio);

            let labela = document.createElement("label");
            labela.innerHTML = f.naziv;
            radioIme.appendChild(labela);
        })

        let space3 = document.createElement("div");
        space3.className ="space3";
        forma.appendChild(space3);

        if(radioIme.length>0)
        {
            const dugmeZaDodavanje= document.createElement("button");
            dugmeZaDodavanje.innerHTML="Nastavi";
            dugmeZaDodavanje.className="but";
            dugmeZaDodavanje.classList.add("pIo");
            space3.appendChild(dugmeZaDodavanje);
        }

        dugmeZaDodavanje.onclick=(el=>
            {   
                let film = this.container.querySelector("input[name='radioTip']:checked").value;

                console.log(film);
                  
                let spoj = ({
                    FilmId: film, GlumacId: glumac.id
                })

                fetch("https://localhost:5001/Spoj/DodajGlumcaUFilm/"+film+"/"+glumac.id,{
                    method:"POST",
                    headers:{
                        'Content-Type':'application/json'
                    },
                    body:JSON.stringify(spoj)
                }).then(response => {
                    if(response.status == 400)
                    {
                        alert("Vec postoji !");
                        return;
                    }
                })
                
            })

    }

    dodajIzmeniFilm(host)
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
            naziv: naziv, reziser: reziser, zanr: tip, godina: god, ocena: ocena, opis: opis, trajanje: trajanje
        })

        fetch("https://localhost:5001/Film/dodajFilmUKlub/"+this.id,{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(film)
        }).then(res =>{
            if(res.status == 400)
            {
                alert("Vec postoji !");
                return;
            }
            else{
                this.crtajBot(2);
            }
        });

        
    }

    dodajGlumca(host)
    {
        
        const ime= host.querySelector(".imeInput").value;
        if(ime.length==0)
        {
            alert("Unesite ime glumca ! ");
            return;
        }
        
        const prezime= host.querySelector(".prezimeInput").value;
        if(prezime.length==0)
        {
            alert("Unesite prezime glumca ! ");
            return;
        }

        const god= host.querySelector(".godInput").value;
        if(god.length==0 || god<1800)
        {
            alert("Unesite validnu godinu rodjenja glumca!");
            return;
        }

        const mesto= host.querySelector(".mestoInput").value;
        if(mesto.length==0)
        {
            alert("Unesite mesto rodjenja glumca ! ");
            return;
        }

        let glumac = ({
            ime: ime, prezime: prezime, godRodjenja: god, mestoRodjenja: mesto
        })

        
        fetch("https://localhost:5001/Glumac/dodajGlumca" ,{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(glumac)
        }).then(res =>{
            if(res.status == 400)
            {
                alert("Vec postoji !");
                return;
            }
            else if(res.status==200){
                this.prikaziGlumce();
            }
        })
        
        
    }


}