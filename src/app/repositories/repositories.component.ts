import { Component, OnInit } from '@angular/core';
import { GitInfoService } from '../git-info.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {
  repos:any;
  constructor(private gitinfo:GitInfoService) { }

  ngOnInit(): void {
    this.repos = this.gitinfo.totalRepos
    
  }

}
