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
import { LocalstorageService } from '../../../Services/localstorage.service';
import { AdminService } from '../../admin.service';


@Component({
  selector: 'app-form-selector',
  standalone: true,
  imports: [
    BPFormComponent,  // triggers error: TS-992012 Component imports must be standalone components, directives, pipes, or must be NgModules
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
  selectedForm: string = 'add_programma';

  // Child Input
  recievedData!: Blogposts | Goepie | Programma;
  blogpostData!: Blogposts
  goepieData!: Goepie
  programmaData!: Programma
  
  // Color Variables response message
  showResponse: boolean = false
  validForm: boolean = false
  bgColor!: string
  bColor!: string
  rpsMessage!: string

  // Blogpost variables
  activeUser: Users[] = [];
  userByName!: Users
  activeUserId!: number
  activeUserAfdelingId!: number


  constructor(private as : AdminService,private formservice : FormService, private authservice : AuthService, private localservice : LocalstorageService) {}

  ngOnInit(): void { 
    this.activeUserId = this.getCurrentLoggedInUserId()
    this.activeUserAfdelingId = this.getCurrentLoggedInUserAfdelingId()
  }


  // Recieved Data From the Child 
  onBlogPostDataRecieved(data: Blogposts) {
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
        this.BlogPostForm.clearForm()
        break;
      
      case "change_goepie":
        // Gather DAta
        this.GoepieForm.sendFormData();
        // Check if valid
        if(this.validForm) {
          if(this.validForm) {        
            this.formservice.addGoepie(
              this.goepieData.location,
              this.goepieData.active       
            ).subscribe();
          }
        }
        this.GoepieForm.clearForm()
        break;
        
      case "add_programma":
        this.ProgrammaForm.sendFormData();      
        this.addProgrammaData();
        this.ProgrammaForm.clearForm()
        break;
      default:
        console.error("ERROR SUBMITING SELECTED FORM")
        break;
    }     
  }

  addProgrammaData() {
    const user = this.localservice.getData('usr');
    this.as.getUserByName(user).subscribe((data : Users) => {
      this.as.getUserByName(user).subscribe((data : Users) => {
        this.programmaData.afdelingId = data.AfdelingId
        console.log("PorgrammaID: ",this.programmaData.afdelingId)
      
        if(this.validForm) {
          this.formservice.addProgramma(
            this.programmaData.afdelingId,
            this.programmaData.programma,
            this.programmaData.datum
          ).subscribe();
        }
      })
    })
  }

  // Add the data that is not gathered by the form
  addBlogpostData() {
    const user = this.localservice.getData('usr');
    console.log(user)
    this.as.getUserByName(user).subscribe((data : Users) => {
      console.log("In addBlogpostData")
      this.userByName = data
      this.blogpostData.userId = this.userByName.id
      this.blogpostData.timePosted =  '2024-05-07 18:59:40';
      if(this.blogpostData.Link == "") {
        this.blogpostData.HasLink = 0
      } else {
        this.blogpostData.HasLink = 1
      }
      if(this.validForm) {
        this.formservice.addBlogpost(
          this.blogpostData.userId,
          this.blogpostData.title,
          this.blogpostData.description,
          this.blogpostData.Image,
          this.blogpostData.Link,
          this.blogpostData.category,
          this.blogpostData.timePosted,
          this.blogpostData.HasLink,
        ).subscribe();
      }
    })   
  }

  // Validation
  onResponseMessage(m : string) {
    this.rpsMessage = m
  }
  onResponseType(t : boolean) {
    switch(t) {
      case true:
        // Succes
        this.bgColor = "#86efac";
        this.bColor = "3px solid #10b981";
        setTimeout(() => {
          this.showResponse = true
        }, 5000)
        this.showResponse = false
        this.validForm = true
        break;
      case false:
        // Error
        this.bgColor = "#fca5a5";
        this.bColor = "3px solid #ef4444";
        setTimeout(() => {         
          this.showResponse = true
        }, 5000)
        this.showResponse = false
        this.validForm = false
        break;
      default:
        // somethign wrong with emiting
        break;
    }
  }

  getCurrentLoggedInUserId():number {
    const user = this.localservice.getData('usr');
    var usrId = 0
    this.as.getUserByName(user).subscribe((data : Users) => {
      usrId = data.id
      console.log(usrId)
      return data.id;      
    })
    return usrId;          
  }

  getCurrentLoggedInUserAfdelingId():number {
    const user = this.localservice.getData('usr');
    var afdId = 0
    this.as.getUserByName(user).subscribe((data : Users) => {
      afdId = data.AfdelingId
      console.log(afdId)
      return data.AfdelingId;      
    })
    return afdId;      
  }
}
