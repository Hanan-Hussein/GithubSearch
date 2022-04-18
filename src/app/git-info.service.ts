import { Injectable } from '@angular/core';
import { HttpProcessorService } from './http-processor.service'
import { UserSkeleton } from './user-skeleton';
import { RepositorySkeleton } from './repository-skeleton';
import { UserRepo } from './user-repo';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GitInfoService {
  userSkeleton!: UserSkeleton;
  userRepositories!: [any];
  userRepo!: UserRepo;
  repos: any = [];
  allRepos!: RepositorySkeleton;
  totalRepos: any = [];

  constructor(private HttpProcessor: HttpProcessorService,) {
    this.userSkeleton = new UserSkeleton("", 0, 0, 0, "", "", new Date(), "", "", "", "");
    this.userRepo = new UserRepo("", "", "", "", 0, 0, new Date(), 0, "");
    this.allRepos = new RepositorySkeleton("", "", "", 0, 0, new Date(), 0, "", "")

  }

  userApi(url: string) {
    this.repos.length=0
    this.HttpProcessor.fetchApi(`${url}?`).subscribe((response) => {
      // console.log(response);
      this.userSkeleton.name = response.login;
      this.userSkeleton.following = response.following;
      this.userSkeleton.followers = response.followers;
      this.userSkeleton.publicRepositories = response.public_repos;
      this.userSkeleton.bio = response.bio;
      this.userSkeleton.image = response.avatar_url;
      this.userSkeleton.creationDate = response.created_at;
      this.userSkeleton.location = response.location;
      this.userSkeleton.email = response.email;
      this.userSkeleton.hireable = response.hireable;
      this.userSkeleton.htmlURL = response.html_url;
      // console.log(this.userSkeleton);

    });

    this.HttpProcessor.fetchApi(`${url}/repos?order=desc&sort=created&`).subscribe((response) => {
      let resp: any;

      response.map((res: any) => {
        resp = new UserRepo(res.name, res.description, res.homepage, res.owner.login, res.stargazers_count, res.watchers_count,
          res.created_at, res.forks_count, res.html_url);
        this.repos.push(resp);
      })
    })
  }
  userRepoSearch(url: string) {
    this.totalRepos.length=0;
    this.HttpProcessor.fetchApi(url).subscribe((response) => {
      console.log(response)
      let allReposList: any;
      response.items.map((res: any) => {
        allReposList = new RepositorySkeleton(res.name, res.description, res.owner.login, res.stargazers_count, res.watchers_count, res.created_at,
          res.forks_count, res.html_url, res.homepage);
        this.totalRepos.push(allReposList)
      })
      console.log(this.allRepos);
    })
  }

  
}
// this should retrun everything about a user
// Should return the list of the repos of the user
// Should give the list of the repos being looked for 