import { NgModule } from '@angular/core';
import { MaskPipe } from './mask.pipe';
import { TableMaskPipe } from './table.pipe';

@NgModule({
    exports: [MaskPipe, TableMaskPipe],
    declarations: [MaskPipe, TableMaskPipe]
})
export class PipesModule { }
