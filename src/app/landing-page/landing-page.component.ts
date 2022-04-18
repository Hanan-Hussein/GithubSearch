import { Component, OnInit } from '@angular/core';
import { GitInfoService } from '../git-info.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  inputData: string='Hanan-Hussein';
  constructor(private gitinfo: GitInfoService,public router:Router) { }

  ngOnInit(): void {
  }
  userSearch() {
    this.gitinfo.userApi(`https://api.github.com/users/${this.inputData}`)
    this.router.navigate(['user'])
  }
  repoSearch() {
    // this.gitinfo.repoApi(`https://api.github.com/search/repositories?q=${this.inputData}&order=desc&sort=stars&page=1&per_page=10`)
    this.router.navigate(['repositories'])
    this.gitinfo.userRepoSearch(`https://api.github.com/search/repositories?q=${this.inputData}&order=desc&sort=stars&page=1&per_page=17`)
  }
}
