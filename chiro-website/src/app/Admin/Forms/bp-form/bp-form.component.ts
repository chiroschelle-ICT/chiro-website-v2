import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
// Form Imports
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
// Parent Imports
import { FormSelectorComponent } from '../!form-selector/form-selector.component';
import { Blogposts } from '../../../Model/Blogposts';

@Component({
  selector: 'app-bp-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    FormSelectorComponent,
  ],
  templateUrl: './bp-form.component.html',
  styleUrl: './bp-form.component.css'
})
export class BPFormComponent implements OnInit{

  constructor() {}

  ngOnInit(): void {}

  id!: null;
  user!: number;
  title!: string;
  details!: string;
  image!: string;
  link!: string;
  category!: number;
  timeposted!: Date;


  @Output() formDataEvent = new EventEmitter<Blogposts>();

  sendFormData() {
    const data: Blogposts = new Blogposts(
      this.id,
      this.user,
      this.title,
      this.details,
      this.image,
      this.link,
      this.category,
      this.timeposted
    );
    this.formDataEvent.emit(data);
  }




}
