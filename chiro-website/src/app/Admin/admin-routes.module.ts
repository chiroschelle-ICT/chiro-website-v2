// imnports
import { Routes } from '@angular/router';
// Components
import { AdminPageComponent } from './admin-page/admin-page.component';
// Services
import { AdminService } from './admin.service';
// Modules
import { AdminModule } from './admin.module';

export const routes: Routes = 
[
   { path: 'adminPage', component: AdminPageComponent},
];
