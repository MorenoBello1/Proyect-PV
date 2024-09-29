import { Component, Input, NgModule, NgModuleRef } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsDetailsComponent } from './pages/products-details/products-details.component';
import { ProductsDetailsUpdateComponent } from './pages/products-details-update/products-details-update.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    DatePipe,
    FormsModule,
    RouterModule,
    RouterOutlet, 
    NavbarComponent, 
    ProductsPageComponent,
    HomePageComponent,
    ProductsDetailsComponent,
    ProductsDetailsUpdateComponent
  
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Proyects-PV';
}
