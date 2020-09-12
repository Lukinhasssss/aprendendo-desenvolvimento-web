import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from './../product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: '',
    price: null
  }

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    
  }

  createProduct(): void { // Vai dispar uma chamada para o método 'create' que está em product.service.ts
    this.productService.create(this.product).subscribe(() => {  // com o método subscribe eu vou ser notificado quando a resposta chegar
      this.productService.showMessage('Produto criado com sucesso!')
      this.router.navigate(['/products']) // Após o cadastro ser concluído redireciona para a página /products
    })

  }

  cancel(): void {
    this.router.navigate(['/products'])
  }
}