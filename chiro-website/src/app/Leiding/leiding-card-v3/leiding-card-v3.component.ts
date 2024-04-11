import { Component, Input, OnInit } from '@angular/core';
import { Users } from '../../Model/Users';

@Component({
  selector: 'app-leiding-card-v3',
  standalone: true,
  imports: [],
  templateUrl: './leiding-card-v3.component.html',
  styleUrl: './leiding-card-v3.component.css'
})
export class LeidingCardV3Component implements OnInit{
  @Input() FilteredUsers!: Users[][]

  ngOnInit(): void {
    
  }

}
