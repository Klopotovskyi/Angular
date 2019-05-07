import { Component, OnInit } from '@angular/core';
import {TASK} from "../task";


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],

})
export class ItemsComponent implements OnInit {
  newItemName: string = '';
  items: any = [];
  itemsObj: any;
  currentItem: TASK;

  addItem(e) {


    this.itemsObj = {
      newItemName: this.newItemName,
      completed: false,
    }
    this.items.push(this.itemsObj);
    this.newItemName = '';
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
