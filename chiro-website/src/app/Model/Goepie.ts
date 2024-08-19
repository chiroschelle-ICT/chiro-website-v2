export class Goepie {
    id:number;
    location:string;
    active:boolean;
    constructor(
        id:number,
        location:string,
        active:boolean
    ) {
        this.id = id;
        this.location = location;
        this.active = active;
    }
}