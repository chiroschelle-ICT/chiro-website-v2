import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { BlogpostComponent } from './blogpost-v1/blogpost.component';
import { BlogpostV2Component } from './blogpost-v2/blogpost-v2.component';
import { BlogpostV3Component } from './blogpost-v3/blogpost-v3.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    HttpClientModule,
    HomeComponent,
    BlogpostComponent,
    BlogpostV2Component,
    BlogpostV3Component
  ]
})
export class HomeModule { }
