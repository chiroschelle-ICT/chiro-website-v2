import { Component } from '@angular/core';
import { GoepiePanelComponent } from '../goepie-panel/goepie-panel.component';
import { BlogpostPanelComponent } from '../blogpost-panel/blogpost-panel.component';
import { AccountPanelComponent } from '../account-panel/account-panel.component';
import { ProgrammaPanelComponent } from '../programma-panel/programma-panel.component';
import { GoepiePageComponent } from "../../../Goepie/goepie-page/goepie-page.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    GoepiePanelComponent,
    BlogpostPanelComponent,
    AccountPanelComponent,
    ProgrammaPanelComponent,
    GoepiePageComponent
],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
