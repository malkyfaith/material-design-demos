// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { TableBasicExampleComponent } from './table-basic-example.component';
import { MdTableModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk';

@NgModule({
    imports: [
        CdkTableModule,
        MdTableModule
    ],
    declarations: [
        TableBasicExampleComponent,
    ],
    exports: [
        TableBasicExampleComponent,
    ]
})
export class TableBasicExampleModule {

}
