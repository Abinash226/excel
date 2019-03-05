import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public httpClient:HttpClient) { 
    console.log('Data service connected');
  }
  getPosts(){
    this.httpClient.get('https://jsonplaceholder.typicode.com/posts').subscribe((res)=>{
      console.log(res);
  });
  }

  saveXls(){
    return this.httpClient.get('http://localhost:8090/api/customers/download/customers.xlsx', { headers: new HttpHeaders({
      'Content-Type': 'application/octet-stream',
      }), responseType: 'blob'});
    }
}
