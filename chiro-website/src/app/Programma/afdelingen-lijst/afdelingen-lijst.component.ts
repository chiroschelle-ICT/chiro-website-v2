import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProgrammaModule } from '../programma.module';

@Component({
  selector: 'app-afdelingen-lijst',
  standalone: true,
  imports: [ProgrammaModule, RouterModule],
  templateUrl: './afdelingen-lijst.component.html',
  styleUrl: './afdelingen-lijst.component.css'
})
export class AfdelingenLijstComponent {

}
