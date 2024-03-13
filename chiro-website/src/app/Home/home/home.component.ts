import { Component } from '@angular/core';
// imports
import { HttpClient, HttpClientModule } from '@angular/common/http';
// Components
import { BlogpostComponent } from '../blogpost-v1/blogpost.component';
import { BlogpostV2Component } from '../blogpost-v2/blogpost-v2.component';
import { BlogpostV3Component } from '../blogpost-v3/blogpost-v3.component';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [
        HttpClientModule,
        BlogpostComponent
    ]
})
export class HomeComponent {

}
