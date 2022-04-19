import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class HttpProcessorService {

  constructor(private http:HttpClient) { }

  fetchApi(url:string):Observable<any>{
    return this.http.get(environment.apiKeys+url);
  }
}
