import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { AComponent } from './a.component';
import { BComponent  } from './b.component';
import { LoggedService } from './logged.service';

@NgModule({
  imports: [
    BrowserModule,FormsModule
   ],
  declarations: [
    AppComponent, AComponent, BComponent
   ],
   providers: [
     LoggedService
   ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
