export class Afdeling 
{
    Id:null;
    Afdeling:string;
    Next:number;
    constructor(
        id:null,
        afdeling:string,
        next:number
    ) {
        this.Id = id;
        this.Afdeling = afdeling;
        this.Next = next;
    }
}