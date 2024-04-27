import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-goepie-page',
  standalone: true,
  template: `
  <pdf-viewer [src]="pdfSrc"
              [render-text]="true"
              [original-size]="false"
              style="width: 400px; height: 500px"
  ></pdf-viewer>
  `,
  imports: [],
  templateUrl: './goepie-page.component.html',
  styleUrl: './goepie-page.component.css'
})
export class GoepiePageComponent implements OnInit{

  pdfSrc = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";

  ngOnInit(): void {
    console.info(this.pdfSrc);
  }
}
