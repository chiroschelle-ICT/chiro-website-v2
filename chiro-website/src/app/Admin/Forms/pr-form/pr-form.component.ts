import { Component, Input, input } from '@angular/core';
// Form Imports
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
// Parent Imports
import { FormSelectorComponent } from '../!form-selector/form-selector.component';

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
export class PrFormComponent {
  @Input() ChildFormGroup!: FormGroup;
}
