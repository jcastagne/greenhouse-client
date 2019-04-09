import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FormControl} from '@angular/forms';


@Component({
  selector: 'gh-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  values: string[];
  mode = new FormControl('over');
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }



}
