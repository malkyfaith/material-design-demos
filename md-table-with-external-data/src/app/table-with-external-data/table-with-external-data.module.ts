import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExternalDataTableComponent } from './external-data-table/external-data-table.component';
import {
  MatPaginatorModule,
  MatSortModule,
  MatTableModule,
} from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule, HttpModule, CdkTableModule, MatPaginatorModule, MatSortModule, MatTableModule
  ],
  declarations: [ExternalDataTableComponent],
  exports: [ExternalDataTableComponent]
})
export class TableWithExternalDataModule { }
