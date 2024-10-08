import { Component } from '@angular/core';
import { GoepiePanelComponent } from '../goepie-panel/goepie-panel.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    GoepiePanelComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
