// Base
import { Component, EventEmitter, Input, OnInit, Output, input } from '@angular/core';
// Form Imports
import { FormBuilder, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
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
      programma: ['', Validators.required],
      datum: ['', Validators.required]
    })
  }

  @Output() formDataEvent = new EventEmitter<Programma>();
  @Output() responseMessage = new EventEmitter<string>();     // The error message
  @Output() responseType = new EventEmitter<boolean>();  
  
  sendFormData() {
    if(this.isFormValid()) {
      const data : Programma = this.programmaForm.value;
      this.formDataEvent.emit(data)
      // Send SUCCES message
      this.responseMessage.emit("Nieuwe Blogpost is Toegevoegd!");
      this.responseType.emit(true);
    } else {
      // Send ERROR / FAIl message
      this.responseMessage.emit("Niet Alle Velden zijn ingevuld!");
      this.responseType.emit(false);
    }
  }
  isFormValid() {
    return this.programmaForm.valid;
  }
  clearForm() {
    this.programmaForm.reset(); 
  }
}