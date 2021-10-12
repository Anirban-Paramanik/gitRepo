import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApicallService {

  url="http://localhost:4000/employees";
  constructor(private http:HttpClient ) { }

  getData(){
    return this.http.get(this.url);
  }
}
