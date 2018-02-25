import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CdkTableModule } from '@angular/cdk';
import { MdTableModule, MdProgressSpinnerModule, MdPaginatorModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MyTableComponent } from './my-table/my-table.component';
import { HttpModule } from '@angular/http';
import { TableService } from './my-table/table.service';

@NgModule({
  declarations: [
    AppComponent,
    MyTableComponent
  ],
  imports: [
    BrowserAnimationsModule,
    HttpModule,
    BrowserModule,
    MdTableModule,
    CdkTableModule,
    MdProgressSpinnerModule,
    MdPaginatorModule
  ],
  providers: [TableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
