import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { ChildToParentComponent } from './childtoparent.component';
import {ParentToChildComponent } from './parenttochild.component';

@NgModule({
  imports: [
    BrowserModule, FormsModule
   ],
  declarations: [
    AppComponent, ChildToParentComponent, ParentToChildComponent
   ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
