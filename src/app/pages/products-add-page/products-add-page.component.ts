import { Component, Output, EventEmitter, inject} from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ListProducts } from '../../models/ListProducts.mock';
import { error } from 'console';

@Component({
  selector: 'app-products-add-page',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule],
  templateUrl: './products-add-page.component.html',
  styleUrl: './products-add-page.component.css'
})
export class ProductsAddPageComponent {
  ListProducts = ListProducts
  form: FormGroup;
  _id:number=0

  constructor(private fb: FormBuilder) {
    // Inicializamos el formulario con los controles y validaciones
    this.form = this.fb.group({
      id: ['', Validators.required],
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      price: ['', [Validators.required]],
      stock: ['', [Validators.required]],
      sku: [''],
      rating: [''],
      discount: ['', [Validators.required]],
      createdAt: ['', [Validators.required]],
      updatedAt: [new Date()],
      imageUrl: [''],
      category: this.fb.group({  // Cambiar a FormGroup
        idC: ['', [Validators.required]],
        nameC: ['', [Validators.required]],
        descriptionC: [''],
        imageUrlC: [''],
        createdAtC: ['', [Validators.required]],
        updatedAtC: [new Date()],
      })
    });
  }

  @Output() closeAddPage = new EventEmitter<boolean>(); // Emite el evento hacia el padre
  //output desde hijo envia una notifiacion a padre con EventEmitter que es para enviar o emitir o un
  // objeto que puede enviar datos a otros componentes.
  //Crea una nueva instancia de EventEmitter que puede enviar valores de tipo booleano.
  
  // Método para cerrar la página de agregar producto y notificar al padre
  comprobacion(id: number){
    const idFormValue = id // Obtener el valor del id desde el formulario
      const idExiste = this.ListProducts.some(product => product.id === idFormValue);  // Verificar si ya existe
      if (idExiste){
        console.log("ya existe")
      }
  }
  Confirmar() {
    this.closeAddPage.emit(false);  

    try {
      // Validamos si el formulario es válido
      const idFormValue = this.form.get('id')?.value;  // Obtener el valor del id desde el formulario
      const idExiste = this.ListProducts.some(product => product.id === idFormValue);  // Verificar si ya existe
      if (idExiste){
        console.log("ya existe")
      }
      else{
        if (this.form.valid) {
          const formData = this.form.value; // Capturamos los datos del formulario
          ListProducts.push(formData); // Añadimos los datos a la lista
          alert('Producto agregado:');
  
          console.log('Producto agregado:', formData);
        } else {
          console.log("El formulario no es válido");
        }
      }
      
    } catch (error) {
      console.log("Error al enviar el formulario:", error);
    }
  }
    
  
  
}
