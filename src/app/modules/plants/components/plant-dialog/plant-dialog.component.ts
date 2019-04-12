import { Component, OnInit, Inject } from '@angular/core';

import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';

import { Plant } from '../../shared/plant';


@Component({
  selector: 'gh-plant-dialog',
  templateUrl: './plant-dialog.component.html',
  styleUrls: ['./plant-dialog.component.scss']
})
export class PlantDialogComponent implements OnInit {

  plant: Plant;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.plant = data.plant;
  }

  ngOnInit() {
  }

}
