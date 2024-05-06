import { Component } from '@angular/core';
import { ProgrammaModule } from '../programma.module';
import { AfdelingenLijstComponent } from "../afdelingen-lijst/afdelingen-lijst.component";

@Component({
    selector: 'app-programma-page',
    standalone: true,
    templateUrl: './programma-page.component.html',
    styleUrl: './programma-page.component.css',
    imports: [ProgrammaModule, AfdelingenLijstComponent]
})
export class ProgrammaPageComponent {

}
