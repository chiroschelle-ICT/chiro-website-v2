import { Component, ViewChild } from '@angular/core';
// Forms Components
import { BPFormComponent } from '../bp-form/bp-form.component';
import { PrFormComponent } from '../pr-form/pr-form.component';
import { UiFormComponent } from '../ui-form/ui-form.component';
import { GpFormComponent } from '../gp-form/gp-form.component';
// Form Imports
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { Blogposts } from '../../../Model/Blogposts';

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
  recievedData: Blogposts | null = null;

  onDataRecieved(data: Blogposts) {
    this.recievedData = data;
    console.log('Data Recieved From Child:', data)
  }

  // On Submit
  submitForm() {
    this.BlogPostForm.sendFormData();
    console.log(this.recievedData);
  }

}
