export class Users
{
    id:number;
    username:string;
    Name: string;
    AfdelingId: number;
    email:string;
    phone:string;
    groeps:boolean;
    jaar_leiding:number;
    leeftijd:number;
    image:string;
    password:string;
    constructor(
        id:number,
        un:string,
        name:string,
        afdelingid:number,
        image:string,
        email:string,
        phone:string,
        groeps:boolean,
        jaarleiding:number,
        age:number,
        pw:string
    ) {
        this.id = id;
        this.username = un;
        this.Name = name;
        this.AfdelingId = afdelingid;
        this.email = email;
        this.phone = phone;
        this.groeps = groeps;
        this.jaar_leiding = jaarleiding;
        this.leeftijd = age;
        this.image = image
        this.password = pw;
    }
}