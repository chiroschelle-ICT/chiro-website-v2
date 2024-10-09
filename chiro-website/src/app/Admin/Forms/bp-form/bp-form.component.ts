// Base
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
// Form Imports
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
// Parent Imports
import { FormSelectorComponent } from '../!form-selector/form-selector.component';
// Models
import { Blogposts } from '../../../Model/Blogposts';
import { FormService } from '../form.service';
import { Category } from '../../../Model/Category';

@Component({
  selector: 'app-bp-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
  ],
  templateUrl: './bp-form.component.html',
  styleUrl: './bp-form.component.css'
})
export class BPFormComponent implements OnInit{
  blogForm!: FormGroup;

  categories: Category[] = []
  defaultCat: number = 1;
  allCategories = [
    { id: 1, name: 'Zondag' },
    { id: 2, name: 'Info' },
    { id: 3, name: 'Bouw' },
    { id: 4, name: 'Activiteit' },
  ];

  constructor(private fb: FormBuilder, private fs : FormService) {}

  ngOnInit() {
    this.blogForm = this.fb.group({
      userId: [''],
      title: ['', Validators.required],
      description: ['', Validators.required],
      Image: ['', Validators.required],
      Link: [''],
      HasLink: [''],
      category: ['', Validators.required],
      timePosted: ['']
    });
    this.fs.getCategories().subscribe((data : Category[]) => {
      this.categories = data
    })
  }


  @Output() formDataEvent = new EventEmitter<Blogposts>();
  @Output() responseMessage = new EventEmitter<string>();     // The error message
  @Output() responseType = new EventEmitter<boolean>();       // True or False for color

  sendFormData() {
    if(this.isFormValid()) {
      const data: Blogposts = this.blogForm.value;
      this.formDataEvent.emit(data);
      // Send SUCCES message
      this.responseMessage.emit("Nieuw Programma is Toegevoegd!");
      this.responseType.emit(true);
    } else {
      // Communicate with Parent Comp and use UI response
      // Send ERROR / FAIl message
      this.responseMessage.emit("Niet Alle Velden zijn ingevuld!");
      this.responseType.emit(false);
    }

  }
  isFormValid() {
    return this.blogForm.valid;
  }
  clearForm() {
    this.blogForm.reset(); 
  }
  
  
}
