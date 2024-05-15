import { Routes } from '@angular/router';
// Components
import { HomeComponent } from './Home/home/home.component';
import { LeidingPageComponent } from './Leiding/leiding-page/leiding-page.component';
import { ProgrammaPageComponent } from './Programma/programma-page/programma-page.component';
import { GoepiePageComponent } from './Goepie/goepie-page/goepie-page.component';
import { ProgrammaAfdelingComponent } from './Programma/programma-afdeling/programma-afdeling.component';
import { AdminPageComponent } from './Admin/admin-page/admin-page.component';
import { LoginComponent } from './Authentication/login/login.component';

export const routes: Routes = 
[
    { path: '', component: HomeComponent },
    { path: 'leidingsPloeg', component: LeidingPageComponent},
    { path: 'programma', component: ProgrammaPageComponent},
    { path: 'goepie', component: GoepiePageComponent},
    { path: 'afdProgramma/:afdId', component: ProgrammaAfdelingComponent},
    { path: 'admin', component: AdminPageComponent},
    { path: "login", component: LoginComponent}
];
