import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProgrammaService } from '../programma.service';
import { Programma } from '../../Model/Programma';
import { LanguagePipePipe } from '../../Pipes/language-pipe.pipe';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-programma-afdeling',
  standalone: true,
  imports: [LanguagePipePipe, DatePipe],
  providers: [],
  templateUrl: './programma-afdeling.component.html',
  styleUrl: './programma-afdeling.component.css'
})
export class ProgrammaAfdelingComponent implements OnInit{

  constructor(private actRoute : ActivatedRoute, private ps : ProgrammaService) {}

  programmas: Programma[] = [];
  paramValue!: number

  ngOnInit(): void {
    this.actRoute.params.subscribe(params => {
      this.paramValue = params['afdId'];
      this.loadData(this.paramValue);
    });
  }

  loadData(param:number) {
    this.ps.getProgrammaPerAfdeling(param).subscribe((data : Programma[]) => {
      this.programmas = data;   
      for(let i=0; i<this.programmas.length; i++) {
        this.programmas[i].datum = this.programmas[i].datum
      }
    })
  }

}
