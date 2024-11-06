import { Component, OnInit } from '@angular/core';
import { BpListComponent } from '../bp-list/bp-list.component';
import { GpListComponent } from '../gp-list/gp-list.component';
import { BPFormComponent } from "../../Forms/bp-form/bp-form.component";
import { PgListComponent } from "../pg-list/pg-list.component";
import { GbListComponent } from '../gb-list/gb-list.component';
import { AdminService } from '../../admin.service';
import { Programma } from '../../../Model/Programma';
import { LocalstorageService } from '../../../Services/localstorage.service';


@Component({
  selector: 'app-overview-page',
  standalone: true,
  imports: [
    BpListComponent,
    BPFormComponent,
    PgListComponent,
    GpListComponent,
    GbListComponent
],
  templateUrl: './overview-page.component.html',
  styleUrl: './overview-page.component.css'
})
export class OverviewPageComponent implements OnInit{

  // 1 = BP, 2 = PG, 3 = GP, 4 = FT, 5 = GB
  activeList: number = 4

  activeUsr!: any // Fix bug with using Users as Type
  programmas: Programma[] = []

  constructor(private as : AdminService, private ls : LocalstorageService) {}

  updateActiveList(val : number) {
    this.activeList = val
  }

  ngOnInit(): void {
  }


}
