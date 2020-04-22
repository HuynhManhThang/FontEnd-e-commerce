import { Component, OnInit } from '@angular/core';
import { Product } from '../../_model/product';
import { ActivatedRoute} from'@angular/router';
import { ProductServicesService } from '../../services/product-services.service';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
product :  Product;
  constructor(
    private pServices :ProductServicesService,
    private aRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.getProduct();
  }
getProduct(){
  return this.aRoute.params.subscribe(param => {
    this.pServices.getProduct(param.id).subscribe(data =>{
      this.product=data
    })
  })
}
}