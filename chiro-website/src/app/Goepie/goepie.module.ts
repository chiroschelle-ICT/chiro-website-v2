import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoepiePageComponent } from './goepie-page/goepie-page.component';

import { PdfViewerModule } from 'ng2-pdf-viewer';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    GoepiePageComponent,
    PdfViewerModule,
  ]
})
export class GoepieModule { }
