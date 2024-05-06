export class Programma 
{
    id:null;
    afdelingId:number;
    programma:string;
    datum:Date;
    constructor(
        i:null,
        a:number,
        p:string,
        d:Date
    ) {
        this.id = i;
        this.afdelingId = a;
        this.programma = p;
        this.datum = d;
    }
}