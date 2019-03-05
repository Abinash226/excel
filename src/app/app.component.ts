import { Component } from '@angular/core';
import { DataService } from './services/data.service';
import { HttpClient } from '@angular/common/http';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'excel';

  constructor(private httpClient: HttpClient, public service:DataService){
  }
  getPosts(){
    return this.httpClient.get('https://jsonplaceholder.typicode.com/posts').subscribe((posts)=>{
      console.log(posts);
});
  }
  saveExcel(){
    return this.httpClient.get('https://jsonplaceholder.typicode.com/posts').subscribe((posts)=>{
      console.log(posts);
});
  }
  onExport() {
    this.service.saveXls().subscribe((res) => {
      const now = Date.now();
      saveAs(res, `test.xlsx`);
    }, error => {
      console.log(error);
    });
  }
}
