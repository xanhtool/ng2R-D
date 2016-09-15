import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css']

})
export class AppComponent {
  constructor (@Inject(DOCUMENT) private document) { }
    ngOnInit() {
      this.document.getElementById('theme').setAttribute('href', this.styles[1]);
    }
    message : string = 'Hello';
    styles = ['https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/flatly/bootstrap.min.css','https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/cerulean/bootstrap.min.css']
}
