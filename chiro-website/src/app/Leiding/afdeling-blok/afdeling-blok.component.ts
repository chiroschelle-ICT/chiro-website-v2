import { Component, Input } from '@angular/core';
import { LeidingCardComponent } from "../leiding-card/leiding-card.component";
import { LeidingCardV2Component } from "../leiding-card-v2/leiding-card-v2.component";
import { LeidingCardV3Component } from "../leiding-card-v3/leiding-card-v3.component";
import { Users } from '../../Model/Users';
import { LeidingService } from '../leiding.service';
import { Info } from '../../Model/Info';

@Component({
    selector: 'app-afdeling-blok',
    standalone: true,
    templateUrl: './afdeling-blok.component.html',
    styleUrl: './afdeling-blok.component.css',
    imports: [LeidingCardComponent, LeidingCardV2Component, LeidingCardV3Component]
})
export class AfdelingBlokComponent {

    constructor(private LeidingServ : LeidingService) {}

    UserWithInfo: Users[] = []

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


    ngOnInit() {
        this.getAllInfo()
    }

    getAllInfo() {
        this.LeidingServ.getInfoNeededByUser().subscribe((data: Users[]) => {
          this.UserWithInfo = data
          this.filterData();
        })
    }

    filterData() {
        for(let i = 0; i < this.UserWithInfo.length; i++) {
            switch (this.UserWithInfo[i].AfdelingId) {
                case 1: // Ribbel J
                    this.RibbelJ.push(this.UserWithInfo[i])
                    break
                case 2: // Ribbel M
                    this.RibbelM.push(this.UserWithInfo[i])
                    break
                case 3: // Speelclub J
                    this.SpeelclubJ.push(this.UserWithInfo[i])
                    break
                case 4: // Speelclub M
                    this.SpeelclubM.push(this.UserWithInfo[i])
                    break;
                case 5: // Rakkers
                    this.Rakkers.push(this.UserWithInfo[i])
                    break;
                case 6: // Kwiks
                    this.Kwiks.push(this.UserWithInfo[i])
                    break;
                case 7: // Toppers
                    this.Toppers.push(this.UserWithInfo[i])
                    break;
                case 8: // Tippers
                    this.Tippers.push(this.UserWithInfo[i])
                    break;
                case 9: // Kerels
                    this.Kerels.push(this.UserWithInfo[i])
                    break;
                case 10: // Tip10s
                    this.Tip10.push(this.UserWithInfo[i])
                    break;
                case 11: // Aspi J
                    this.AspiJ.push(this.UserWithInfo[i])
                    break;
                case 12: // Aspi M
                    this.AspiM.push(this.UserWithInfo[i])
                    break;
                case 13: // Leiding
                    this.VeeBee.push(this.UserWithInfo[i])
                    break;
            }
        }
    }

    
}
