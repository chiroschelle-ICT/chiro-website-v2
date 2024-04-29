import { Component, OnInit } from '@angular/core';
import {  NgxExtendedPdfViewerModule,NgxExtendedPdfViewerService, pdfDefaultOptions } from 'ngx-extended-pdf-viewer';

@Component({
  selector: 'app-goepie-page',
  standalone: true,
  imports: [NgxExtendedPdfViewerModule],
  providers: [NgxExtendedPdfViewerService],
  templateUrl: './goepie-page.component.html',
  styleUrl: './goepie-page.component.css'
})
export class GoepiePageComponent implements OnInit{

  pdfSrc = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";
  //   [src]="'/assets/GOEPIES/Goepie_3.pdf'"

  constructor(private pdfService: NgxExtendedPdfViewerService) {
    pdfDefaultOptions.assetsFolder = 'bleeding-edge';  
  }

  ngOnInit(): void {
    console.info(this.pdfSrc);
  }
}
