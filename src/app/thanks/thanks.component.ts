import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';

@Component({
  selector: 'app-thanks',
  templateUrl: './thanks.component.html',
  styleUrls: ['./thanks.component.scss']
})
export class ThanksComponent implements OnInit {

  goalText: string = 'temp';

  constructor(private _data: DataService) { }

  ngOnInit() {
    this.goalText = this._data.goal_now;
  }

}
