import { Component, Input } from '@angular/core';
// Form Imports
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
// Parent Imports
import { FormSelectorComponent } from '../!form-selector/form-selector.component';

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
export class GpFormComponent {
  @Input() ChildFormGroup!: FormGroup;

}
