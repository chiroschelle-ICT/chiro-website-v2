// Base
import { Component, ViewChild } from '@angular/core';
// Forms Components
import { BPFormComponent } from '../bp-form/bp-form.component';
import { PrFormComponent } from '../pr-form/pr-form.component';
import { UiFormComponent } from '../ui-form/ui-form.component';
import { GpFormComponent } from '../gp-form/gp-form.component';
// Form Imports
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
// Modals
import { Blogposts } from '../../../Model/Blogposts';
import { Programma } from '../../../Model/Programma';
import { Goepie } from '../../../Model/Goepie';

@Component({
  selector: 'app-form-selector',
  standalone: true,
  imports: [
    BPFormComponent,
    GpFormComponent,
    PrFormComponent,
    UiFormComponent,
    FormsModule,
],
  templateUrl: './form-selector.component.html',
  styleUrl: './form-selector.component.css'
})
export class FormSelectorComponent {
  @ViewChild(BPFormComponent) BlogPostForm!: BPFormComponent;
  @ViewChild(GpFormComponent) GoepieForm!: GpFormComponent;
  @ViewChild(PrFormComponent) ProgrammaForm!: PrFormComponent;

  // Form Selection
  selectedForm: string = 'add_blogpost';

  // Child Input
  recievedData!: Blogposts | Goepie | Programma;

  // Recieved Data From the Child
  onDataRecieved(data:  Blogposts | Goepie | Programma) {
    this.recievedData = data;
    console.log('Data Recieved From Child:', data)
  }

  // Check what form is active to then ask for the data
  submitForm() {
    switch(this.selectedForm) {
      case "add_blogpost":
        this.BlogPostForm.sendFormData();
        break;
      case "change_goepie":
        this.GoepieForm.sendFormData();
        break;
      case "add_programma":
        this.ProgrammaForm.sendFormData();
        break;
      default:
        // ERROR
        console.error("ERROR SUBMITING SELECTED FORM")
        break;
    }  
    console.log(this.recievedData);
  }

}
