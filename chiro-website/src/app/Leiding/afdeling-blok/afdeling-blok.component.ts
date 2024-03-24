import { Component } from '@angular/core';
import { LeidingCardComponent } from "../leiding-card/leiding-card.component";
import { LeidingCardV2Component } from "../leiding-card-v2/leiding-card-v2.component";
import { LeidingCardV3Component } from "../leiding-card-v3/leiding-card-v3.component";

@Component({
    selector: 'app-afdeling-blok',
    standalone: true,
    templateUrl: './afdeling-blok.component.html',
    styleUrl: './afdeling-blok.component.css',
    imports: [LeidingCardComponent, LeidingCardV2Component, LeidingCardV3Component]
})
export class AfdelingBlokComponent {

}
