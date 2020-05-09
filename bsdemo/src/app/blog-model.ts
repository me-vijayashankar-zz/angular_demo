export class BlogModel {
    public title : string;
    public intro : string;
    public body : string;
    public conclusion : string;
    public writtenBy : string;
    public postedOn : Date;

    constructor(title: string,intro:string,body:string,conclusion:string,writtenBy:string,postedOn:Date){
        this.title=title;
        this.intro=intro;
        this.body=body;
        this.conclusion=conclusion;
        this.writtenBy=writtenBy;
        this.postedOn=postedOn;
    }
}
