import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RegisterclassComponent } from './registerclass/registerclass.component';
import { DepartmentsService } from './registerclass/departments.service';

@NgModule({
  declarations: [
    AppComponent,
    RegisterclassComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    DepartmentsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
