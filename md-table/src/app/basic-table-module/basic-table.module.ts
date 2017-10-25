import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicTableComponent } from './basic-table/basic-table.component';
import {
  MatPaginatorModule,
  MatSortModule,
  MatTableModule,
} from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';

@NgModule({
  imports: [
    CommonModule, CdkTableModule, MatPaginatorModule, MatSortModule, MatTableModule
  ],
  declarations: [BasicTableComponent],
  exports: [BasicTableComponent]
})
export class BasicTableModule { }
