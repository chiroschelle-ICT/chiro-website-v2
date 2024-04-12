export class Users
{
    id:number;
    Name: string;
    AfdelingId: number;
    constructor(
        id:number,
        name:string,
        afdelingid:number
    ) {
        this.id = id;
        this.Name = name;
        this.AfdelingId = afdelingid;
    }
}