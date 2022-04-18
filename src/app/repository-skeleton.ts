export class RepositorySkeleton {
    constructor(
        public name:string,
        public description:string,
        public author:string,
        public stargazer:number,
        public watchers:number,
        public created_at:Date,
        public forks:number,
        public htmlURL:string,
        public cloneURL:string,
        ){}
}
