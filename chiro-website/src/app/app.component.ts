import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

// imports
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './Navigation/header/header.component';
import { FooterComponent } from './Navigation/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'chiro-website';
}
