import { Routes } from '@angular/router';
// Components
import { HomeComponent } from './Home/home/home.component';
import { LeidingPageComponent } from './Leiding/leiding-page/leiding-page.component';
import { ProgrammaPageComponent } from './Programma/programma-page/programma-page.component';
import { GoepiePageComponent } from './Goepie/goepie-page/goepie-page.component';

export const routes: Routes = 
[
    { path: '', component: HomeComponent },
    { path: 'leidingsPloeg', component: LeidingPageComponent},
    { path: 'programma', component: ProgrammaPageComponent},
    { path: 'goepie', component: GoepiePageComponent}

];
