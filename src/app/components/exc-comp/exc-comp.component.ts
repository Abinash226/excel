import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-exc-comp',
  templateUrl: './exc-comp.component.html',
  styleUrls: ['./exc-comp.component.css']
})
export class ExcCompComponent implements OnInit {

  constructor(private dataService:DataService) { }

  ngOnInit() {
  }

}
