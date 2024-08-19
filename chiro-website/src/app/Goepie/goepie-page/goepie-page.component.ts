import { Component, OnInit, HostListener, Renderer2 } from '@angular/core';
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
  zoom = 50

  constructor(private pdfService: NgxExtendedPdfViewerService, private renderer: Renderer2) {
    pdfDefaultOptions.assetsFolder = 'bleeding-edge';  
  }


  ngOnInit(): void {
    console.info(this.pdfSrc);
    this.updateZoom()
  }

  @HostListener('window:resize')
  onResize() {
    this.updateZoom();
  }

  updateZoom() {
    const screenWidth = window.innerWidth;
    if(screenWidth > 1024) {
      this.zoom = 50
    }else if(screenWidth > 640) {
      this.zoom = 30
    }
     else {
      this.zoom = 17;
    }
    console.log(this.zoom)
  }
}
