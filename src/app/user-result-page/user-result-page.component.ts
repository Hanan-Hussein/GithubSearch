import { Component, OnInit } from '@angular/core';
import { GitInfoService } from '../git-info.service';
import { UserRepo } from '../user-repo';
import { UserSkeleton } from '../user-skeleton';

@Component({
  selector: 'app-user-result-page',
  templateUrl: './user-result-page.component.html',
  styleUrls: ['./user-result-page.component.css']
})
export class UserResultPageComponent implements OnInit {
 
  htmlURL!: string;
  user: any = [];
  users!: UserSkeleton
  userRespo!: UserRepo
  repo:any=[];

  constructor(private gitinfo: GitInfoService) {

  }

  ngOnInit(): void {
    this.users = this.gitinfo.userSkeleton
    // this.repo = this.gitinfo.repos
    // this.repo.push(this.userRespo);
    console.log("repo", this.repo);

    this.user.push(this.users)
    // console.log(this.user);

  }
  redirection(url: any) {
    window.open(url, '_blank')
  }
}
