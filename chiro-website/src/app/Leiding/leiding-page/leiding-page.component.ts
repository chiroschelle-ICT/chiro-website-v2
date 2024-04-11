import { Component, OnInit } from '@angular/core';
import { LeidingModule } from '../leiding.module';
import { AfdelingBlokComponent } from "../afdeling-blok/afdeling-blok.component";
import { Users } from '../../Model/Users';
import { LeidingService } from '../leiding.service';

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
export class LeidingPageComponent implements OnInit {

    users: Users[] = []
    userGroup: Users[] = []
    filteredUsers: Users[] = []

    constructor(private LeidingServ : LeidingService) {}

    ngOnInit() {
      this.loadData()
    }

    loadData() {
        this.LeidingServ.getUsers().subscribe((data: Users[]) => {
            this.users = data;
        })
    }

   


}
