import { Component } from '@angular/core';
import { IProduct } from 'src/app/models/product.model';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  products?: IProduct[];

  constructor(private dataService: DataService, 
    private router: Router){
    this.dataService.getProducts().subscribe((response: IProduct[]) => {
      this.products = response;
    })
  }

  // http://localhost:4200/products-detail/1
  onButtonClicked(product: IProduct){
    this.router.navigate(['products-detail', product.id])
  }

}
