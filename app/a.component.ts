import { Component, OnInit } from '@angular/core';
import { LoggedService } from './logged.service';
import { Logged } from './logged.interface';


@Component({
  selector: 'a-component',
  template:`
  <form (ngSubmit)="login()">
  <input type="email" [(ngModel)]="logged.email" name = "email" placeholder="Enter Email" required/>
  <button>Log In</button>
</form>
`
})
export class AComponent implements OnInit {
  constructor(private ls: LoggedService) {}

  ngOnInit() {}

  private logged: Logged = { email: '' };

 login(): void {
   console.info('Setting a logged user from Component A');
   this.ls.setLogged(this.logged);
 }
}
