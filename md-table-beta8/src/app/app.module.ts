import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CdkTableModule } from '@angular/cdk';
import { MdTableModule } from '@angular/material';

import { AppComponent } from './app.component';
import { MyTableComponent } from './my-table/my-table.component';
import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    MyTableComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    MdTableModule,
    CdkTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
