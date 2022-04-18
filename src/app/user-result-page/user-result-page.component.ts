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
  // bio: string = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, dignissimos.
  // Exercitationem voluptas atque veritatis deleniti perferendis eveniet harum ipsum magni!
  // Ad eos error a nobis veniam omnis provident ipsam cumque!
  // Qui ea sint, iure distinctio quia quasi cum iste quis.
  // Recusandae molestias quidem ab ullam facilis deleniti! Quasi, laudantium expedita!`;
  // name!: string
  // followers: number = 0;
  // following: number = 0;
  // publicRepositories: number = 0;
  htmlURL!: string;
  user: any = [];
  users!: UserSkeleton
  userRespo!: UserRepo
  repo:any=[];

  constructor(private gitinfo: GitInfoService) {

  }

  ngOnInit(): void {
    this.users = this.gitinfo.userSkeleton
    this.repo = this.gitinfo.repos
    // this.repo.push(this.userRespo);
    console.log("repo", this.repo);

    this.user.push(this.users)
    console.log("xxxxxxxxxxxxxxx",this.user);

  }
  redirection(url: any) {
    window.open(url, '_blank')
  }
}
