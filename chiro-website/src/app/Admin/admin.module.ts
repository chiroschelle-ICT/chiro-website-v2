import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routes } from './admin-routes.module';
import { AfdelingColorDirective } from '../Directives/afdeling-color.directive';

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    AfdelingColorDirective
  ]
})
export class AdminModule { }
