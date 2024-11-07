export class Blogposts 
{
    id: null;
    userId: number;
    title: string;
    description: string;
    Image: string;
    Link: string;
    category: number;
    // timePosted: Date;
    timePosted: any;
    HasLink: number;
    constructor(
        id:null,
        userid:number,
        title:string,
        description:string,
        image:string,
        link:string,
        category:number,
        // tp: Date,
        tp: any,
        hs: number
    ) {
        this.id = id;
        this.userId = userid;
        this.title = title;
        this.description = description;
        this.Image = image;
        this.Link = link;
        this.category = category;
        this.timePosted = tp;
        this.HasLink = hs;
    }
}