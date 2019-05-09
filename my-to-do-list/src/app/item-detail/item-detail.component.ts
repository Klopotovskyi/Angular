import {Component, Input, OnInit} from '@angular/core';
import {TASK} from "../task";

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {
  @Input() item: TASK;

  constructor() {
  }

  ngOnInit() {
  }
}
