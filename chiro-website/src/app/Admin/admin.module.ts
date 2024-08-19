import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routes } from './admin-routes.module';
import { NavbarComponent } from './Phone-components/navbar/navbar.component';
import { MainComponent } from './Phone-components/main/main.component';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NavbarComponent,
    MainComponent
  ]
})
export class AdminModule { }
