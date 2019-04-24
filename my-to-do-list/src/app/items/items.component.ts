import { Component, OnInit } from '@angular/core';
import {TASK} from "../task";
import {TASK_LIST} from "../moch-task-list";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],

})
export class ItemsComponent implements OnInit {

  currentItem: TASK;

  public items: TASK[] = TASK_LIST;

  public onSelect(activity: TASK): void {
    this.currentItem = activity;
  }

  constructor() { }

  ngOnInit() {  }

}
