import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { OverviewPageComponent } from '../../Overview/overview-page/overview-page.component';
import { AdminService } from '../../admin.service';
import { Users } from '../../../Model/Users';
import { HomeService } from '../../../Home/home.service';
import { Info } from '../../../Model/Info';
import { LocalstorageService } from '../../../Services/localstorage.service';
import { FormSelectorComponent } from "../../Forms/!form-selector/form-selector.component";
import { BPFormComponent } from '../../Forms/bp-form/bp-form.component';
import { GpFormComponent } from '../../Forms/gp-form/gp-form.component';
import { PrFormComponent } from '../../Forms/pr-form/pr-form.component';
import { UiFormComponent } from '../../Forms/ui-form/ui-form.component';
import { DashboardComponent } from '../../Dashboard/dashboard/dashboard.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    OverviewPageComponent,
    FormSelectorComponent,
    FormSelectorComponent,
    BPFormComponent,
    GpFormComponent,
    PrFormComponent,
    UiFormComponent,
    DashboardComponent,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})


export class NavbarComponent implements OnInit{

  
  sideBarColor!: string
  activePanel: number = 1

  user!: Users;
  users: Users[] = []
  infos: Info[] = []
  loggedUN!: any
  

  constructor(private as : AdminService, private hs : HomeService, private lss : LocalstorageService) {}

  ngOnInit(): void {
    this.hs.getInfo().subscribe((data : Info[]) => {
      this.infos = data
    })
    this.loggedUN = this.lss.getData("usr");
    this.as.getUserByName(this.loggedUN).subscribe((data : Users) => {
      this.user = data
      this.sideBarColor = this.as.checkAfdelingColor(this.user);
    }) 
  }

  changeAdminPanel(num: number) {
    this.activePanel = num
  }

}

