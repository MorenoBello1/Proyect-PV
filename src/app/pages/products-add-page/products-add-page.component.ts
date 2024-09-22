import { Component } from '@angular/core';

@Component({
  selector: 'app-products-add-page',
  standalone: true,
  imports: [],
  templateUrl: './products-add-page.component.html',
  styleUrl: './products-add-page.component.css'
})
export class ProductsAddPageComponent {
  viewinput?:boolean;

  public Confirmar(){
    this.viewinput=false;
  
  }
}
