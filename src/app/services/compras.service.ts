import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComprasService {
  private Compras = new BehaviorSubject<number>(0);
    // Usamos BehaviorSubject para tener un valor inicial y permitir suscripción

  currentMessage = this.Compras.asObservable();
  aumentar(num: number){
    this.Compras.next(num);
  }
  constructor() { }
}
