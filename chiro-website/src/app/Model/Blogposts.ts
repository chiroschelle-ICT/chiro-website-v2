export class Blogposts 
{
    id: null;
    userId: number;
    title: string;
    description: string;
    Image: string;
    link: string;
    category: number;
    timePosted: Date;
    constructor(
        id:null,
        userid:number,
        title:string,
        description:string,
        image:string,
        link:string,
        category:number,
        tp: Date
    ) {
        this.id = id;
        this.userId = userid;
        this.title = title;
        this.description = description;
        this.Image = image;
        this.link = link;
        this.category = category;
        this.timePosted = tp;
    }
}