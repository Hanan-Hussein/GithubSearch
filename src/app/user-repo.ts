export class UserRepo {
    constructor(public name:string,
        public description:string,
        public homepage:string,
        public author:string,
        public stargazer:number,
        public watchers:number,
        public created_at:Date,
        public forks:number,
        public htmlURL:string){}

}
