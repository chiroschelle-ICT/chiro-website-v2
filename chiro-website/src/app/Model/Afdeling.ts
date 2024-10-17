export class Afdeling 
{
    Id:null;
    afdeling:string;
    Next:number;
    constructor(
        id:null,
        afdeling:string,
        next:number
    ) {
        this.Id = id;
        this.afdeling = afdeling;
        this.Next = next;
    }
}