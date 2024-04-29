import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoepiePageComponent } from './goepie-page/goepie-page.component';
import {  NgxExtendedPdfViewerModule,NgxExtendedPdfViewerService, pdfDefaultOptions } from 'ngx-extended-pdf-viewer';


@NgModule({
  providers: [
    NgxExtendedPdfViewerService
  ],
  declarations: [
    
  ],
  imports: [
    CommonModule,
    GoepiePageComponent,
    NgxExtendedPdfViewerModule
  ]
})
export class GoepieModule { }
