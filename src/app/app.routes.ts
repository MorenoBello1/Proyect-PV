import { Routes } from '@angular/router';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductsDetailsComponent } from './pages/products-details/products-details.component';

export const routes: Routes = [
    {path:"Products", component: ProductsPageComponent},
    {path:"Products/:id", component: ProductsDetailsComponent},
    {path:"", component: HomePageComponent},
    {path: '**', redirectTo:'',pathMatch:'full'}

];
