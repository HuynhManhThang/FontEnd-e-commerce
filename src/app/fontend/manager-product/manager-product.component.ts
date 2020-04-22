import { Component, OnInit } from '@angular/core';
import { Product } from '../../_model/product';
import { ActivatedRoute, Router} from'@angular/router';
import { ProductServicesService } from '../../services/product-services.service';

@Component({
  selector: 'app-manager-product',
  templateUrl: './manager-product.component.html',
  styleUrls: ['./manager-product.component.css']
})
export class ManagerProductComponent implements OnInit {
products :Product[];
product: Product = new Product();
  constructor(
    private pService: ProductServicesService,
    private aRouter : ActivatedRoute,
    private router :Router,
  ) { }

  ngOnInit() {
    this.getProducts();
    this.getProduct();
  }
getProducts(){
return  this.pService.getProduts().subscribe(data => this.products=data)
}
addProduct(){
this.pService.addProduct(this.product).subscribe(data => {
  this.router.navigateByUrl('/managerProduct')
});
}
getProduct(){
this.aRouter.params.subscribe(param =>{
this.pService.getProduct(param.id).subscribe(data => {
  this.product =data
});
});
}
editProduct(){
this.pService.editProduct(this.product).subscribe(data => {
  this.router.navigateByUrl('/managerProduct')
} )
}
removeProduct(id){
  return this.pService.removeProduct(this.product).subscribe(data => {
   this.products= this.products.filter(product=>product.id != id )

  })
 
}
}