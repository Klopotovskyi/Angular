import { Component, OnInit } from '@angular/core';
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
      completed: false,
    }
    this.items.push(this.itemsObj);
    this.name = '';
    e.preventDefault();
  }
  deleteTodo(index) {
    this.items.splice (index, 1);
  }

  public onSelect(activity: TASK): void {
    this.currentItem = activity;
  }

  constructor() {

  }

  ngOnInit() {  }

}
