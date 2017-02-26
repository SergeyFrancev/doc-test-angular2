import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {
  value: number = 1

  constructor() { }

  ngOnInit() {
  }

  incress() {
    this.value++
  }

  decress() {
    this.value--
  }
}
