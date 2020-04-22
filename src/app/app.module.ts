import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from'@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeCompComponent } from './fontend/homeComp/homeComp.component';
import { ProductListComponent } from './fontend/product-list/product-list.component';
import { ProductServicesService } from './services/product-services.service';
import { ProductDetailComponent } from './fontend/product-detail/product-detail.component';

import { BannerHomeComponent } from './fontend/banner-home/banner-home.component';
import { FooterWebComponent } from './fontend/footer-web/footer-web.component';
import { BannerProductComponent } from './fontend/banner-product/banner-product.component';
import { Loi404Component } from './loi404/loi404.component';
import { MiddleSectionComponent } from './fontend/middle-section/middle-section.component';
import { IndexComponent } from './fontend/index/index.component';
import { AdminComponent } from './backend/admin/admin.component';
import { LoginComponent } from './fontend/login/login.component';
import { RegisterComponent } from './fontend/register/register.component';
import { ProductmanagersComponent } from './backend/productmanagers/productmanagers.component';


@NgModule({
   declarations: [
      AppComponent,
      HomeCompComponent,
      ProductListComponent,
      ProductDetailComponent,
     
      BannerHomeComponent,
      FooterWebComponent,
      BannerProductComponent,
      Loi404Component,
      MiddleSectionComponent,
      IndexComponent,
      AdminComponent,
      ProductmanagersComponent,
      LoginComponent,
      RegisterComponent

   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      
   ],
   providers: [ProductServicesService],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
