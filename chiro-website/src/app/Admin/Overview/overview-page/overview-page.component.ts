import { Component } from '@angular/core';
import { BpListComponent } from '../bp-list/bp-list.component';
import { BPFormComponent } from "../../Forms/bp-form/bp-form.component";
import { PgListComponent } from "../pg-list/pg-list.component";

@Component({
  selector: 'app-overview-page',
  standalone: true,
  imports: [
    BpListComponent,
    BPFormComponent,
    PgListComponent
],
  templateUrl: './overview-page.component.html',
  styleUrl: './overview-page.component.css'
})
export class OverviewPageComponent {


}
