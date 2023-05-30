import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main-page/main/main.component';
import {AboutComponent} from "./pages/about-page/about/about.component";
import {ProductsComponent} from "./pages/products-page/products/products.component";

const routes: Routes = [
  {path: "", component: MainComponent},
  {path: "about", component: AboutComponent },
  {path: "products", component: ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
