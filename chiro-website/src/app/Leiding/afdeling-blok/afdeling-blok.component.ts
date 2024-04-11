import { Component, Input } from '@angular/core';
import { LeidingCardComponent } from "../leiding-card/leiding-card.component";
import { LeidingCardV2Component } from "../leiding-card-v2/leiding-card-v2.component";
import { LeidingCardV3Component } from "../leiding-card-v3/leiding-card-v3.component";
import { Users } from '../../Model/Users';
import { LeidingService } from '../leiding.service';

@Component({
    selector: 'app-afdeling-blok',
    standalone: true,
    templateUrl: './afdeling-blok.component.html',
    styleUrl: './afdeling-blok.component.css',
    imports: [LeidingCardComponent, LeidingCardV2Component, LeidingCardV3Component]
})
export class AfdelingBlokComponent {

    users: Users[] = []

    RibbelJ: Users[] = []
    RibbelM: Users[] = []
    SpeelclubJ: Users[] = []
    SpeelclubM: Users[] = []
    Rakkers: Users[] = []
    Kwiks: Users[] = []
    Toppers: Users[] = []
    Tippers: Users[] = []
    Kerels: Users[] = []
    Tip10: Users[] = []
    AspiJ: Users[] = []
    AspiM: Users[] = []
    VeeBee: Users[] = []

    filteredUsers: Users[][] = [
        this.RibbelJ,
        this.RibbelM,
        this.SpeelclubJ,
        this.SpeelclubM,
        this.Rakkers,
        this.Kwiks,
        this.Toppers,
        this.Tippers,
        this.Kerels,
        this.Tip10,
        this.AspiJ,
        this.AspiM,
        this.VeeBee 
    ];


    // data Only Leiding from specific afdeling from parent (Leiding Page)
    @Input() usersPerAfdeling!: Users

    // Data to send to child (Leiding Card)
    parentVariable: string = "Hellow Sub-Comp"

    constructor(private LeidingServ : LeidingService) {}

    ngOnInit() {
      this.loadData()
      this.filterData();
    }

    loadData() {
        this.LeidingServ.getUsers().subscribe((data: Users[]) => {
            this.users = data;
            console.log(this.users)
            this.filterData()
            console.log(this.RibbelJ)        
        })
    }
    filterData() {
        for(let i = 0; i < this.users.length; i++) {
            switch (this.users[i].AfdelingId) {
                case 1: // Ribbel J
                    this.RibbelJ.push(this.users[i])
                    break
                case 2: // Ribbel M
                    this.RibbelM.push(this.users[i])
                    break
                case 3: // Speelclub J
                    this.SpeelclubJ.push(this.users[i])
                    break
                case 4: // Speelclub M
                    this.SpeelclubM.push(this.users[i])
                    break;
                case 5: // Rakkers
                    this.Rakkers.push(this.users[i])
                    break;
                case 6: // Kwiks
                    this.Kwiks.push(this.users[i])
                    break;
                case 7: // Toppers
                    this.Toppers.push(this.users[i])
                    break;
                case 8: // Tippers
                    this.Tippers.push(this.users[i])
                    break;
                case 9: // Kerels
                    this.Kerels.push(this.users[i])
                    break;
                case 10: // Tip10s
                    this.Tip10.push(this.users[i])
                    break;
                case 11: // Aspi J
                    this.AspiJ.push(this.users[i])
                    break;
                case 12: // Aspi M
                    this.AspiM.push(this.users[i])
                    break;
                case 13: // Leiding
                    this.VeeBee.push(this.users[i])
                    break;
            }
        }
    }
    
}
