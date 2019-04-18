import { Component, OnInit } from '@angular/core';
import {TASK } from "../task";
import {TASK_LIST} from "../moch-task-list";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],

})
export class ItemsComponent implements OnInit {

  public task_item: TASK = {
    id: 1,
    name: 'my_task_1'
  }
  public LIST: TASK[] = TASK_LIST;
  constructor() { }

  ngOnInit() {  }

}
