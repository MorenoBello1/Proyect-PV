import { Component, inject, OnInit } from '@angular/core';
import { ListProducts } from '../../models/ListProducts.mock';
import { ActivatedRoute } from '@angular/router';
import { CurrencyPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-products-details',
  standalone: true,
  imports: [CurrencyPipe, DatePipe],
  templateUrl: './products-details.component.html',
  styleUrl: './products-details.component.css'
})
export class ProductsDetailsComponent implements OnInit{

  ListProducts = ListProducts;
  private _ruta = inject(ActivatedRoute)
  product:any;


ngOnInit(): void {
  this._ruta.params.subscribe(data=>{
    const id = data["id"]
    this.product= this.ListProducts.find(p=> p.id == id)
  })
  

}
}
