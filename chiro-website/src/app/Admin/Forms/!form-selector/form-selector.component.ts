// Base
import { Component, OnInit, ViewChild } from '@angular/core';
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
import { FormService } from '../form.service';
import { AuthService } from '../../../Authentication/auth.service';
import { Users } from '../../../Model/Users';
import { Observable } from 'rxjs';

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
export class FormSelectorComponent implements OnInit{
  @ViewChild(BPFormComponent) BlogPostForm!: BPFormComponent;
  @ViewChild(GpFormComponent) GoepieForm!: GpFormComponent;
  @ViewChild(PrFormComponent) ProgrammaForm!: PrFormComponent;

  // Form Selection
  selectedForm: string = 'add_blogpost';

  // Child Input
  recievedData!: Blogposts | Goepie | Programma;
  blogpostData!: Blogposts
  goepieData!: Goepie
  programmaData!: Programma
  
  // Blogpost variables
  activeUser: Users[] = [];

  constructor(private formservice : FormService, private authservice : AuthService) {}

  ngOnInit(): void {
    this.authservice.getUserWithLocalStorage().subscribe((data : Users[]) => {
      this.activeUser = data;
    });
  }


  // Recieved Data From the Child 
  onBlogPostDataRecieved(data: Blogposts ) {
    this.blogpostData = data;
    console.log('Bogpost Data Recieved From Child:', data)
  }
  onGoepieDataRecieved(data: Goepie ) {
    this.goepieData = data;
    console.log('Goepie Data Recieved From Child:', data)
  }
  onProgrammaDataRecieved(data: Programma) {
    this.programmaData = data;
    console.log('Programma Data Recieved From Child:', data)
  }

  // Check what form is active to then ask for the data
  submitForm() {
    switch(this.selectedForm) {
      case "add_blogpost":
        this.BlogPostForm.sendFormData();
        this.addBlogpostData()
        console.log(this.blogpostData.userId)
        this.formservice.addBlogpost(
          this.blogpostData.userId,
          this.blogpostData.title,
          this.blogpostData.description,
          this.blogpostData.Image,
          this.blogpostData.Link,
          this.blogpostData.category,
          this.blogpostData.timePosted,
          this.blogpostData.HasLink
        ).subscribe();
        break;
      case "change_goepie":
        this.GoepieForm.sendFormData();
        break;
      case "add_programma":
        this.ProgrammaForm.sendFormData();
        this.programmaData.afdelingId = this.activeUser[0].AfdelingId
        this.formservice.addProgramma(
          this.programmaData.afdelingId,
          this.programmaData.programma,
          this.programmaData.datum
        ).subscribe();
        
        break;
      default:
        // ERROR
        console.error("ERROR SUBMITING SELECTED FORM")
        break;
    }  
  }

  // Add the data that is not gathered by the form
  addBlogpostData() {
    this.blogpostData.userId = this.activeUser[0].id
    this.blogpostData.timePosted = new Date()
    if(this.blogpostData.Link == "") {
      this.blogpostData.HasLink = 0
    } else {
      this.blogpostData.HasLink = 1
    }
  }


}
