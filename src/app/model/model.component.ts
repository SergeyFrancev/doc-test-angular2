import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {
  value: number = 1;

  constructor() { }

  ngOnInit() {
  }

  increase() {
    this.value++
  }

  decrease() {
    this.value--;
    if (this.value < 0) {
      this.value = 0
    }
  }
}
