import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bubbles',
  templateUrl: './bubbles.component.html',
  styleUrls: ['./bubbles.component.scss']
})
export class BubblesComponent implements OnInit {

  constructor() { }

  @Input() consumptionValue;
  @Input() generationValue;

  ngOnInit(): void {
  }

}
