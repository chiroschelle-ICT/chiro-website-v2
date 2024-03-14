export class Programma 
{
    Id:null;
    AfdelingId:number;
    Programma:string;
    Datum:Date;
    constructor(
        id:null,
        afdelingid:number,
        programma:string,
        datum:Date
    ) {
        this.Id = id;
        this.AfdelingId = afdelingid;
        this.Programma = programma;
        this.Datum = datum;
    }
}