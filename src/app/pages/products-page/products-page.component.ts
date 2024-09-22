import { Component, inject } from '@angular/core';
import { ListProducts } from '../../models/ListProducts.mock';
import { CurrencyPipe } from '@angular/common';
import { Router} from '@angular/router';
import { trace } from 'node:console';
import { ProductsAddPageComponent } from '../products-add-page/products-add-page.component';

@Component({
  selector: 'app-products-page',
  standalone: true,
  imports: [CurrencyPipe, ProductsAddPageComponent],
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.css'
})
export class ProductsPageComponent {
viewinput:boolean=false;
ListProducts = ListProducts;
 private _router = inject(Router)

public Observar(id: number){
  this._router.navigate(['/Products',id])
}

public Eliminar(id: Number){
  const comparar = this.ListProducts.findIndex(p => p.id == id);
    if (comparar !== -1){ //menos -1 cuando no se encuentra
      this.ListProducts.splice(comparar, 1);
    }
}
public Agregar(){
  this.viewinput=true;
}

}
