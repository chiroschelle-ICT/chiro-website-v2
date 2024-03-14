export class Verhuur
{
    Id:null;
    Item:string;
    Prijs:number;
    Waarborg:number;
    UserId:number;
    constructor
    (
        id:null,
        item:string,
        prijs:number,
        waarborg:number,
        userid:number
    ) {
        this.Id = id;
        this.Item = item;
        this.Prijs = prijs;
        this.Waarborg = waarborg;
        this.UserId = userid;
    }
}