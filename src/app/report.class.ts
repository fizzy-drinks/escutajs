export class Report {

    time : string = '';
    title : string = '';
    type : string = '';
    reporter : string = '';
    location : string = '';
    description : string = '';
    interviews : string = '';
    open : boolean = true;

    constructor(time:string='', type:string='', title:string='', location:string='',
                reporter:string='', description:string='', interviews:string='', open=true) {
        this.time = time;
        this.type = type;
        this.title = title;
        this.location = location;
        this.reporter = reporter;
        this.description = description;
        this.interviews = interviews;
        this.open = open;
    }

}
