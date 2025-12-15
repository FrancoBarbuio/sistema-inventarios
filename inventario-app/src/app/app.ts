import { Component, signal } from '@angular/core';
import { ProductoLista } from "./producto-lista/producto-lista";
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from "@angular/router";
//import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  //imports: [RouterOutlet],
  templateUrl: './app.html',
  imports: [RouterModule]
})
export class App {
  protected readonly title = signal('inventario-app');
}
