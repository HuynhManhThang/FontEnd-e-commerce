import { Component, OnInit } from '@angular/core';
import { ProductServicesService } from '../../services/product-services.service';
import { Product } from '../../_model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
products :Product[];
  constructor(
    private productServices: ProductServicesService,
  ) { }

  ngOnInit() {
this.getProducts();
  }
getProducts(){
return  this.productServices.getProduts().subscribe(data => this.products=data)
}
}