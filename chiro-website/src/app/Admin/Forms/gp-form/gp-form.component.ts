// Base
import { Component, EventEmitter, OnInit, Output, Renderer2 } from '@angular/core';
// Form Imports
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
// Parent Imports
import { FormSelectorComponent } from '../!form-selector/form-selector.component';
// Models
import { Goepie } from '../../../Model/Goepie';
// PDF Viewer
import {  NgxExtendedPdfViewerModule,NgxExtendedPdfViewerService, pdfDefaultOptions } from 'ngx-extended-pdf-viewer';


@Component({
  selector: 'app-gp-form',
  standalone: true,
  providers: [NgxExtendedPdfViewerService],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    FormSelectorComponent,
    NgxExtendedPdfViewerModule
  ],
  templateUrl: './gp-form.component.html',
  styleUrl: './gp-form.component.css'
})
export class GpFormComponent implements OnInit{
  goepieForm!: FormGroup;
  zoom = 20

  constructor(private fg : FormBuilder, private pdfService: NgxExtendedPdfViewerService, private renderer: Renderer2){
    pdfDefaultOptions.assetsFolder = 'bleeding-edge';  
  }

  ngOnInit() {
    this.goepieForm = this.fg.group({
      id: [null],
      location: ['', Validators.required],
      active: [false]
    });
  }

  @Output() formDataEvent = new EventEmitter<Goepie>();
  @Output() responseMessage = new EventEmitter<string>();     // The error message
  @Output() responseType = new EventEmitter<boolean>();  

  sendFormData() {
    if(this.isFormValid()) {
      const data: Goepie = this.goepieForm.value
      this.formDataEvent.emit(data)
      // Send SUCCES Message
      this.responseMessage.emit("Nieuwe Goepie Toegevoegd!");
      this.responseType.emit(true);
    } else {
        // Send ERROR Message
        this.responseMessage.emit("Niet Alle Velden zijn ingevuld!");
        this.responseType.emit(false);
    }
  }

  isFormValid() {
    console.log(this.goepieForm.valid)
    return this.goepieForm.valid;
  }
  clearForm() {
    this.goepieForm.reset(); 
  }


}