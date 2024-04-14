export class Users
{
    id:number;
    Name: string;
    AfdelingId: number;
    email:string;
    phone:string;
    groeps:boolean;
    jaar_leiding:number;
    leeftijd:number;
    image:string;
    constructor(
        id:number,
        name:string,
        afdelingid:number,
        image:string,
        email:string,
        phone:string,
        groeps:boolean,
        jaarleiding:number,
        age:number
    ) {
        this.id = id;
        this.Name = name;
        this.AfdelingId = afdelingid;
        this.email = email;
        this.phone = phone;
        this.groeps = groeps;
        this.jaar_leiding = jaarleiding;
        this.leeftijd = age;
        this.image = image
    }
}