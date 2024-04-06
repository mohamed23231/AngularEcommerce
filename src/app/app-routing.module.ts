import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductsComponent } from './products/products.component';
import { BrandComponent } from './brand/brand.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { authGuardGuard } from './auth-guard.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent ,canActivate:[authGuardGuard]},
  { path: 'cart', component: CartComponent,canActivate:[authGuardGuard] },
  { path: 'products', component: ProductsComponent ,canActivate:[authGuardGuard]},
  { path: 'categories', component: CategoriesComponent ,canActivate:[authGuardGuard]},
  { path: 'brand', component: BrandComponent,canActivate:[authGuardGuard] },
  { path: 'login', component: LoginComponent },
  { path:'register', component: RegisterComponent },
  { path:'resetpw', component: ForgetPasswordComponent },
  { path: 'notfound', component: NotfoundComponent },
  { path: '**', redirectTo: '/notfound' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
