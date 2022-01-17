export class Glumac
{
    constructor(ime, prezime, godRodjenja, mestoRodjenja)
    {
        if(ime)
        {
            this.ime=ime; 
        }
        else{
            ime ="Default";
        }
        if(prezime)
        {
            this.prezime=prezime; 
        }
        else{
            prezime ="Default";
        }
        if(godRodjenja)
        {
            this.godRodjenja=godRodjenja; 
        }
        else{
            godRodjenja = 1980;
        }
        if(mestoRodjenja)
        {
            this.mestoRodjenja=mestoRodjenja; 
        }
        else{
            mestoRodjenja = "Default";
        }
    }

 
}