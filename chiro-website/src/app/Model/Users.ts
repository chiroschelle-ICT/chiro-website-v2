export class Users
{
    Id:null;
    UserName: string;
    AfdelingId: number;
    constructor(
        id:null,
        username:string,
        afdelingid:number
    ) {
        this.Id = id;
        this.UserName = username;
        this.AfdelingId = afdelingid;
    }
}