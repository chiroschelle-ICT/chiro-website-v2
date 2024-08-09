// Base
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
// Form Imports
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
// Parent Imports
import { FormSelectorComponent } from '../!form-selector/form-selector.component';
// Models
import { Goepie } from '../../../Model/Goepie';

@Component({
  selector: 'app-gp-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    FormSelectorComponent,
  ],
  templateUrl: './gp-form.component.html',
  styleUrl: './gp-form.component.css'
})
export class GpFormComponent implements OnInit{
  goepieForm!: FormGroup;

  constructor(private fg : FormBuilder){}

  ngOnInit() {
    this.goepieForm = this.fg.group({
      id: [null],
      location: ['']
    });
  }

  @Output() formDataEvent = new EventEmitter<Goepie>();

  sendFormData() {
    const data: Goepie = this.goepieForm.value;
    this.formDataEvent.emit(data);

  }

  clearForm() {
    this.goepieForm.reset(); 
  }
}