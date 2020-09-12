import { Injectable } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";
import { HttpClient } from '@angular/common/http';
import { Product } from './product.model';
import { Observable, EMPTY } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = "http://localhost:3001/products"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', { // O 2º parâmetro aqui é uma action que serve para fechar a snackBar, ela recebe qualquer nome como parâmetro
      duration: 2000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    })
  }

  // Inserindo produtos no backend (Create)
  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product).pipe( // Responsável por inserir um novo produto no backend
      map(obj => obj),
      catchError(e => this.handleError(e))
    )
  }

  // Lendo produtos do backend (Read)
  read(): Observable<Product[]> {
    // return this.http.get<Product[]>(this.baseUrl) // Responsável por ler os produtos cadastrados no backend
    return this.http.get<Product[]>(this.baseUrl).pipe( // Responsável por inserir um novo produto no backend
      map(obj => obj),
      catchError(e => this.handleError(e))
    )
  }

  readById(id: number): Observable<Product> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Product>(url).pipe( // Responsável por inserir um novo produto no backend
      map(obj => obj),
      catchError(e => this.handleError(e))
    )
  }

  update(product: Product): Observable<Product> {
    const url = `${this.baseUrl}/${product.id}`
    return this.http.put<Product>(url, product).pipe( // Responsável por inserir um novo produto no backend
      map(obj => obj),
      catchError(e => this.handleError(e))
    )
  }

  delete(id: number): Observable<Product> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Product>(url).pipe( // Responsável por inserir um novo produto no backend
      map(obj => obj),
      catchError(e => this.handleError(e))
    )
  }

  handleError(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro!', true)
    return EMPTY
  }
}