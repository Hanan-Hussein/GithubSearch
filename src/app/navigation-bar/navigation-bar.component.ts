import { Component, OnInit } from '@angular/core';
import { GitInfoService } from '../git-info.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {
  inputData!:string;
  constructor(private gitinfo:GitInfoService,public router:Router) { }

  ngOnInit(): void {
  }
  userSearch() {
    if(this.inputData===''){
      alert("Search field cannot be left empty");

      return;
    }
    if(true)
    this.gitinfo.userApi(`https://api.github.com/users/${this.inputData}`)
    this.router.navigate(['user'])
  }
  home(){
    this.router.navigate([''])
  }
  repoSearch() {
    if(this.inputData===''){
      alert("Search field cannot be left empty");

      return;
    }
    // this.gitinfo.repoApi(`https://api.github.com/search/repositories?q=${this.inputData}&order=desc&sort=stars&page=1&per_page=10`)
    this.router.navigate(['repositories'])
    this.gitinfo.userRepoSearch(`https://api.github.com/search/repositories?q=${this.inputData}&order=desc&sort=stars&page=1&per_page=17`)
  }

}
