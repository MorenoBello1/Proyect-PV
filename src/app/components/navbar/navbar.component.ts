import { Component, inject, Input, OnInit, Output } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { ComprasService } from '../../services/compras.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent  {

 

}
