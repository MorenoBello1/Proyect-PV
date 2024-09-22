import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductsDetailsComponent } from './pages/products-details/products-details.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterModule,
    RouterOutlet, 
    NavbarComponent, 
    ProductsPageComponent,
    HomePageComponent,
    ProductsDetailsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Proyects-PV';
}
