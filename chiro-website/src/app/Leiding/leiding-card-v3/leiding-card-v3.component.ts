import { Component, Input, OnInit } from '@angular/core';
import { Users } from '../../Model/Users';
import { LeidingService } from '../leiding.service';
import { Info } from '../../Model/Info';

@Component({
  selector: 'app-leiding-card-v3',
  standalone: true,
  imports: [],
  templateUrl: './leiding-card-v3.component.html',
  styleUrl: './leiding-card-v3.component.css'
})
export class LeidingCardV3Component{
  @Input() FilteredUsers!: Users[]

  constructor(private LeidingServ : LeidingService) {}





}
