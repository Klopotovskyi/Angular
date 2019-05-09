import {Component, OnInit} from '@angular/core';
import {TASK} from "../task";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],

})
export class ItemsComponent implements OnInit {
  name: string = '';
  items: any = [];
  itemsObj: TASK;
  currentItem: TASK;

  addItem(e) {
    this.itemsObj = {
      name: this.name,
      status: false,
      complited: false,
      statusCond: "inProgress"
    }
    this.items.push(this.itemsObj);
    this.name = '';
    e.preventDefault();
  }

  deleteTodo(index) {
    this.items.splice(index, 1);
  }

  onSelect(activity: TASK): void {
    this.currentItem = activity;

    if (this.currentItem.status === true) {
      this.currentItem.statusCond = "Done"
    } else {
      this.currentItem.statusCond = "inProgress"
    }
  }

  constructor() {

  }

  ngOnInit() {
  }

}
