import { Component } from '@angular/core';
import { LeidingModule } from '../leiding.module';
import { AfdelingBlokComponent } from "../afdeling-blok/afdeling-blok.component";

@Component({
    selector: 'app-leiding-page',
    standalone: true,
    templateUrl: './leiding-page.component.html',
    styleUrl: './leiding-page.component.css',
    imports: [
        LeidingModule,
        AfdelingBlokComponent
    ]
})
export class LeidingPageComponent {

}
