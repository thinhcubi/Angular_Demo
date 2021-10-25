import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../service/product.service";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
 formEdit?: FormGroup
  constructor(private productService: ProductService,
              private router: ActivatedRoute,
              private fb: FormBuilder,
              private route: Router
              ) { }

  ngOnInit(): void {
   let id = parseInt(<string>this.router.snapshot.paramMap.get('id'));
   let product = this.productService.findByIndex(id);
   this.formEdit = this.fb.group({
     name: [product.name],
     price: [product.price],
     description: [product.description]
   })
  }
  submit(){
   let index = parseInt(<string>this.router.snapshot.paramMap.get('id'));
   let data = this.formEdit?.value
    this.productService.updateProduct(data,index)
    this.route.navigate(['product/list'])
  }

}
