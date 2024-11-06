import { Component, OnInit } from '@angular/core';
import { Programma } from '../../../Model/Programma';
import { DashboarbService } from '../dashboarb.service';

@Component({
  selector: 'app-programma-panel',
  standalone: true,
  imports: [],
  templateUrl: './programma-panel.component.html',
  styleUrl: './programma-panel.component.css'
})
export class ProgrammaPanelComponent implements OnInit {

  nearest_programmas: Programma[] = []

  constructor(private ds : DashboarbService) {}

  savedColors: string[]  = []
  styleColors: string[] = ["gray", "black"]

  ngOnInit(): void {
    this.ds.getNearestProgramma().subscribe((data : Programma[]) => {
      this.nearest_programmas = data;
    })
  }

  getAfdelingBgBrColors(afId:number) : string[] {
    switch(afId) {
      case 1:
      case 2:
        return ["#c084fc","3px solid #7e22ce"];
      case 3:
      case 4:
        return ["#fef08a","3px solid #a16207"];
      case 5:
      case 6:
        return ["#86efac ","3px solid #15803d "];
      case 7:
      case 8:
        return ["#fca5a5","3px solid #f87171"];
      case 9:
      case 10:
        return ["#93c5fd","3px solid #60a5fa"];
      case 11:
      case 12:
        return ["#fdba74","3px solid #fb923c "];
    }
    return ["gray","black"]
  } 


}
