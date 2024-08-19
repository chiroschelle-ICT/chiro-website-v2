import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Components
import { AfdelingBlokComponent } from './afdeling-blok/afdeling-blok.component';
import { LeidingPageComponent } from './leiding-page/leiding-page.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LeidingPageComponent,
    AfdelingBlokComponent,
  ]
})
export class LeidingModule { }
