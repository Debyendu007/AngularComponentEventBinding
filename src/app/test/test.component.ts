import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test]',
  template: `
            <h2>{{title}}</h2>
            <button (click)="btnOneClick($event)">Button 1</button>
            &nbsp;
            <button (click)="greeting='Welcome Dibx'">Button 2</button>
            {{greeting}}
            
            <input #myInput type="text">
            <button (click)=logMessage(myInput)>Log Mesage</button>
  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public title="Event Binding Example";
  public name = "Dibyendu";
  public greeting = "";

  constructor() { }

  ngOnInit() {
  }

  btnOneClick(event) {
    console.log(event);
    this.greeting = event.type;
  }

  logMessage(inputElement) {
    console.log(inputElement.value);

  }

}
