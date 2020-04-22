import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeCompComponent } from './fontend/homeComp/homeComp.component';
import { ProductListComponent } from './fontend/product-list/product-list.component';
import { ProductDetailComponent } from './fontend/product-detail/product-detail.component';
import { ManagerProductComponent } from './fontend/manager-product/manager-product.component';
import { Loi404Component } from './loi404/loi404.component';
import { IndexComponent } from './fontend/index/index.component';
import { AdminComponent } from './backend/admin/admin.component';
import { ProductmanagersComponent } from './backend/productmanagers/productmanagers.component';



const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  {
    path: '', component: IndexComponent, children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeCompComponent },
      { path: 'shopNow', component: ProductListComponent },
      { path: 'product/detail/:id', component: ProductDetailComponent },
      // {path:'login',component:LoginComponent},
      // {path:'register',component:RegisterComponent}
    ]
  },

  {
    path: 'admin', component: AdminComponent, children: [
      { path: '', redirectTo: 'product-manager', pathMatch: 'full' },
      { path: 'product-manager', component: ProductmanagersComponent }
    ]
  },




  //  
  //   ,
  //   {path:"product/edit/:id",component:ManagerProductComponent},
  //   {path :'managerProduct',component:ManagerProductComponent},
  { path: '404', component: Loi404Component },
  { path: '**', redirectTo: '404', pathMatch: 'full' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
