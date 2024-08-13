// Base
import { Component, EventEmitter, Input, OnInit, Output, input } from '@angular/core';
// Form Imports
import { FormBuilder, FormControl, FormGroup, FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
// Parent Imports
import { FormSelectorComponent } from '../!form-selector/form-selector.component';
// Models
import { Programma } from '../../../Model/Programma';

@Component({
  selector: 'app-pr-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    FormSelectorComponent,
  ],
  templateUrl: './pr-form.component.html',
  styleUrl: './pr-form.component.css'
})
export class PrFormComponent implements OnInit{
  programmaForm!: FormGroup;

  constructor(private fb : FormBuilder) {}

  ngOnInit(): void {
    this.programmaForm = this.fb.group({
      programma: [''],
      datum: ['']
    })
  }

  @Output() formDataEvent = new EventEmitter<Programma>();
  @Output() responseMessage = new EventEmitter<string>();     // The error message
  @Output() responseType = new EventEmitter<boolean>();  
  
  sendFormData() {
    const data : Programma = this.programmaForm.value;
    this.formDataEvent.emit(data)
  }
  clearForm() {
    this.programmaForm.reset(); 
  }
}