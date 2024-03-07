export class Blogposts 
{
    Id: null;
    UserId: number;
    Title: string;
    Description: string;
    Image: string;
    Link: string;
    constructor(
        id:null,
        userid:number,
        title:string,
        description:string,
        image:string,
        link:string,
    ) {
        this.Id = id;
        this.UserId = userid;
        this.Title = title;
        this.Description = description;
        this.Image = image;
        this.Link = link;
    }
}