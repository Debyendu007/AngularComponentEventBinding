import { Component, OnInit } from '@angular/core';

@Component({
    selector: '[app-twoway-bind]',
    template: `
        <h2>{{title}}</h2>
        <input [(ngModel)]="name" type="text">
        {{name}}
    
    `,
    styles: []
})
export class TwoWayBindingComponent implements OnInit
{
    public title="Two Way Binding Example";
    public name = "";
    constructor() { }

    ngOnInit()
    {
    }
}
