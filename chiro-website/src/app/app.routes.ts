import { Routes } from '@angular/router';
// Components
import { HomeComponent } from './Home/home/home.component';
import { LeidingPageComponent } from './Leiding/leiding-page/leiding-page.component';

export const routes: Routes = 
[
    { path: '', component: HomeComponent },
    { path: 'leidingsPloeg', component: LeidingPageComponent}
];
