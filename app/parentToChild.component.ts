import { Component, OnInit, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'parent-child',
  template:`
  <h1 > mama message: {{name}} </h1>
  `,
})
export class ParentToChildComponent implements OnInit {
  constructor() {  }

  ngOnInit() {}

  @Input() name: string;

   ngOnChanges(changes: SimpleChange) { }


}
