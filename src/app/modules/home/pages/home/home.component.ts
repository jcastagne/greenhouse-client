import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'gh-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  values: number[];
  mode = new FormControl('over');
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.values = [1, 2, 3, 4, 5, 6]
  }



}
