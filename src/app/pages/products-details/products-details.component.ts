import { Component, EventEmitter, inject, Input, OnInit } from '@angular/core';
import { ListProducts } from '../../models/ListProducts.mock';
import { ActivatedRoute } from '@angular/router';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { ProductsDetailsUpdateComponent } from '../products-details-update/products-details-update.component';

@Component({
  selector: 'app-products-details',
  standalone: true,
  imports: [CurrencyPipe, DatePipe, ProductsDetailsUpdateComponent],
  templateUrl: './products-details.component.html',
  styleUrl: './products-details.component.css'
})
export class ProductsDetailsComponent implements OnInit{

  
  ListProducts = ListProducts;
  private _ruta = inject(ActivatedRoute)
  product:any;
  viewUpdate: boolean =false;


ngOnInit(): void {
  this._ruta.params.subscribe(data=>{
    const id = data["id"]
    this.product= this.ListProducts.find(p=> p.id == id)
  })
  

} 

update(){
  this.viewUpdate=true;
  return this.product
}

}
