import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { UserComponent } from './components/user/user.component';
import { ProductResolver } from './services/product.resolver';
import { UserResolver } from './services/user.resolver';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'user', component: UserComponent, resolve: { users: UserResolver } },
  { path: 'product', component: ProductComponent, resolve: { products: ProductResolver } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule],
  providers: [UserResolver, ProductResolver]
})
export class AppRoutingModule { }
