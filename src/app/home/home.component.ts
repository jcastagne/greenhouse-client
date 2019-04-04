import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'gh-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  values: string[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    // this.http.get('https://gh-api.azurewebsites.net/api/values')
    // .subscribe((data: string[]) => this.values = data);
  }



}
