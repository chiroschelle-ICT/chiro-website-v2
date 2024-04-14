export class Info 
{
    id:null;
    userId: number;
    email:string;
    phone:string;
    groeps:boolean;
    jaar_leiding:number;
    leeftijd:number;
    image:string;
    constructor(
        id:null,
        userid: number,
        image:string,
        email:string,
        phone:string,
        groeps:boolean,
        jaarleiding:number,
        age:number
    ) {
        this.id = id;
        this.userId = userid;
        this.email = email;
        this.phone = phone;
        this.groeps = groeps;
        this.jaar_leiding = jaarleiding;
        this.leeftijd = age;
        this.image = image
    }
}