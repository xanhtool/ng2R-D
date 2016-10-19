import { Component } from '@angular/core';
import { LoggedService } from './logged.service';
import { Logged } from './logged.interface';

@Component({
  selector: 'b-component',
  template:`
  <p *ngIf="logged">
  Welcome {{ logged.email }}
</p>
`
})
export class BComponent  {

  private logged: Logged;

  constructor(private ls: LoggedService) {
    this.ls.getLogged().subscribe(logged => {
      console.info('Receiving logged user Component B');
      this.logged = logged;
    });
  }
}
