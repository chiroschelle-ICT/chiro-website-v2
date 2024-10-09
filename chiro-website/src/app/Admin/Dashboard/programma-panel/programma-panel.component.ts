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

  ngOnInit(): void {
    this.ds.getNearestProgramma().subscribe((data : Programma[]) => {
      this.nearest_programmas = data;
    })
  }

}
