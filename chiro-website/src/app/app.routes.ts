import { Routes } from '@angular/router';
// Components
import { HomeComponent } from './Home/home/home.component';
import { LeidingPageComponent } from './Leiding/leiding-page/leiding-page.component';
import { ProgrammaPageComponent } from './Programma/programma-page/programma-page.component';
import { GoepiePageComponent } from './Goepie/goepie-page/goepie-page.component';
import { ProgrammaAfdelingComponent } from './Programma/programma-afdeling/programma-afdeling.component';
import { AdminPageComponent } from './Admin/admin-page/admin-page.component';
import { LoginComponent } from './Authentication/login/login.component';
import { adminGuard } from './Guards/admin.guard';
import { LogoutComponent } from './Authentication/logout/logout.component';

export const routes: Routes = 
[
    { path: '', component: HomeComponent },
    { path: 'leiding', component: LeidingPageComponent},

    // Use routing in comp
    { path: 'programma', component: ProgrammaPageComponent},
    { path: 'afdProgramma/:afdId', component: ProgrammaAfdelingComponent},

    { path: 'goepie', component: GoepiePageComponent},
    { path: "login", component: LoginComponent},
    { path: 'logout', component: LogoutComponent},
    { path: 'admin', loadComponent: () =>
        import('./Admin/admin.module').then(
            (m) => m.AdminModule
        ),
        canActivate: [adminGuard]
    },
];
