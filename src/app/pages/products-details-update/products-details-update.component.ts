import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, output, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ListProducts } from '../../models/ListProducts.mock';
import { eventNames } from 'process';
import { Product } from '../../models/Product.model';

@Component({
  selector: 'app-products-details-update',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule], // Corregido: No debe incluirse DatePipe en imports
  templateUrl: './products-details-update.component.html',
  styleUrls: ['./products-details-update.component.css'], 
  providers: [DatePipe] // Asegura que DatePipe esté disponible
})
export class ProductsDetailsUpdateComponent implements OnInit {
  @Output() CloseUpdatePage = new EventEmitter<boolean>();
  @Output() ProductoUpdate = new EventEmitter<Product>();
  @Input() producto: any; 

  ListProducts = ListProducts
  form: FormGroup;

  constructor(private fb: FormBuilder, private datePipe: DatePipe) {
    this.form = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      description: ['', [Validators.required]],
      price: ['', [Validators.required]],
      stock: ['', [Validators.required]],
      sku: [''],
      rating: [''],
      discount: ['', [Validators.required]],
      createdAt: [{ value: '', disabled: true }], // Deshabilitado por defecto
      updatedAt: [new Date()],
      imageUrl: [''],
      category: this.fb.group({
        idC: ['', [Validators.required]],
        nameC: ['', [Validators.required]],
        descriptionC: [''],
        imageUrlC: [''],
        createdAtC: ['', [Validators.required]],
        updatedAtC: [new Date()],
      })
    });
  }

  ngOnInit(): void {
    if (this.producto) {
      console.log(this.producto);

      // Formateamos las fechas a 'yyyy-MM-dd' para que sean mostradas correctamente
      const formattedCreatedAt = this.datePipe.transform(this.producto.createdAt, 'yyyy-MM-dd');
      const formattedCreatedAtC = this.datePipe.transform(this.producto.category.createdAtC, 'yyyy-MM-dd');

      // Parchamos los valores al formulario
      this.form.patchValue({
        id: this.producto.id,
        name: this.producto.name,
        description: this.producto.description,
        price: this.producto.price,
        stock: this.producto.stock,
        sku: this.producto.sku,
        rating: this.producto.rating,
        discount: this.producto.discount,
        createdAt: formattedCreatedAt, // Usamos la fecha formateada
        updatedAt: this.producto.updatedAt,
        imageUrl: this.producto.imageUrl,
        category: {
          idC: this.producto.category.idC,
          nameC: this.producto.category.nameC,
          descriptionC: this.producto.category.descriptionC,
          imageUrlC: this.producto.category.imageUrlC,
          createdAtC: formattedCreatedAtC, // Usamos la fecha formateada
          updatedAtC: this.producto.category.updatedAtC
        }
      });
    }
  }

  guardar(id: Number) {
    try{
      const comprobar = this.ListProducts.findIndex(p=> p.id === id)
      
      if(comprobar != -1){
        this.ListProducts.splice(comprobar, 1, { ...this.form.value })//Aquí, el operador ... copia todas las propiedades de objOriginal en objClonado.
        this.ProductoUpdate.emit(this.form.value); // Emitimos el formulario como el producto actualizado

        // De esta manera, form es una copia independiente.
        this.CloseUpdatePage.emit(false); // Emitimos evento para cerrar la página
      }
    }catch(Er){
      this.ProductoUpdate.emit(this.form.value); // Emitimos el formulario como el producto actualizado

      console.log("Ocurrio un error" +Er)
      this.CloseUpdatePage.emit(false); // Emitimos evento para cerrar la página

    }
  }
}