import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Components
import { BlogpostComponent } from './blogpost-v1/blogpost.component';
import { BlogpostV2Component } from './blogpost-v2/blogpost-v2.component';
import { BlogpostV3Component } from './blogpost-v3/blogpost-v3.component';
// Imports
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    BlogpostComponent,
    BlogpostV2Component,
    BlogpostV3Component,
    CommonModule,
    HttpClientModule,
  ]
})
export class HomeModule { }
