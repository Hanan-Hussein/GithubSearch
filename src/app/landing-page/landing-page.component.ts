import { Component, OnInit } from '@angular/core';
import { GitInfoService } from '../git-info.service';
import { Router } from '@angular/router';
import { AstMemoryEfficientTransformer } from '@angular/compiler';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  inputData: string='';
  constructor(private gitinfo: GitInfoService,public router:Router) { }

  ngOnInit(): void {
  }
  userSearch() {
    if(this.inputData===''){
      alert("Search field cannot be left empty");

      return;
    }
    this.gitinfo.userApi(`@api.github.com/users/${this.inputData}`)
    this.router.navigate(['user'])
  }
  repoSearch() {
    if(this.inputData===''){
      alert("Search field cannot be left empty");
      return;
    }
    // this.gitinfo.repoApi(`https://api.github.com/search/repositories?q=${this.inputData}&order=desc&sort=stars&page=1&per_page=10`)
    this.router.navigate(['repositories'])
    this.gitinfo.userRepoSearch(`@api.github.com/search/repositories?q=${this.inputData}&order=desc&sort=stars&page=1&per_page=17`)
  }
 
}
