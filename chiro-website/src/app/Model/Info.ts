export class Info 
{
    Id:null;
    Afdeling:string;
    Email:string;
    Phone:string;
    Groeps:boolean;
    JaarLeiding:number;
    Age:number
    constructor(
        id:null,
        afdeling:string,
        email:string,
        phone:string,
        groeps:boolean,
        jaarleiding:number,
        age:number
    ) {
        this.Id = id;
        this.Afdeling = afdeling;
        this.Email = email;
        this.Phone = phone;
        this.Groeps = groeps;
        this.JaarLeiding = jaarleiding;
        this.Age = age;
    }
}