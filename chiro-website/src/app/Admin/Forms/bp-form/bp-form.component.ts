import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
// Form Imports
import { FormBuilder, FormControl, FormGroup, FormsModule } from '@angular/forms';
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
  blogForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.blogForm = this.fb.group({
      id: [null],
      userId: [''],
      title: [''],
      description: [''],
      image: [''],
      Link: [''],
      HasLink: [''],
      category: [null],
      timePosted: [null]
    });
  }


  @Output() formDataEvent = new EventEmitter<Blogposts>();

  sendFormData() {
    const data: Blogposts = this.blogForm.value;
    this.formDataEvent.emit(data);
  }




}
