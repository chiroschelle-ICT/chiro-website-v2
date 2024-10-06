import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAfdelingColor]',
  standalone: true
})
export class AfdelingColorDirective implements OnInit{

  @Input() afdId!: number;

  constructor(private el : ElementRef, private renderer : Renderer2) { }

  ngOnInit() {
    const strings = this.checkafdeling(this.afdId);
    // Set the innerHTML to the returned strings
    this.renderer.setStyle(this.el.nativeElement, 'border', `2px solid ${strings[0]}`);
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', strings[1]);
  }

  checkafdeling(n: number): string[] {
    switch(n) {
      case 1:
        case 2:
          return ["#a855f7", "red"];
        case 3:
        case 4:
          return ["#eab308", "red"];
        case 5:
        case 6:
          return ["#16a34a", "red"];
        case 7:
        case 8:
          return ["#ef4444", "red"];
        case 9:
        case 10:
          return ["#3b82f6", "red"];
        case 11:
        case 12:  // Changed from 10 to 11 to correct the overlap
          return ["#d97706", "red"];
        case 13:
          return ["#475569", "red"];
        default:
          return ["#000000", "red"]; // Optional default
    }
  }

}
