import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent implements OnInit {

  constructor() { }

  value1: string = "";
  value2: string = "";
  value3: string = "";
  value4: string = "";

  ngOnInit(): void {
  }

}
