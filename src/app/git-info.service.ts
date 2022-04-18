import { Injectable } from '@angular/core';
import { HttpProcessorService } from './http-processor.service';
import { UserRepo } from './user-repo';
import { UserSkeleton } from './user-skeleton';

@Injectable({
  providedIn: 'root'
})
export class GitInfoService {
  userSkeleton!: UserSkeleton;
  userRepositories!: [any];
  userRepo!: UserRepo;
  // allRepos!: RepositorySkeleton;
  totalRepos: any = [];
  constructor(
    private HttpProcessor: HttpProcessorService
  ) {
    this.userSkeleton = new UserSkeleton("", 0, 0, 0, "", "", new Date(), "", "", "", "");

   }
    userApi(url: string) {
    // this.repos.length=0
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

 
  }
}
