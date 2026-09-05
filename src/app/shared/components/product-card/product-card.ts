import { Component, Input } from '@angular/core';
import { Knife } from '../../models/knife.interface';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss'
})
export class ProductCardComponent {
  @Input({ required: true }) knife!: Knife;

  goToDetails() {
    // В майбутньому тут буде Router.navigate(['/product', this.knife.id])
    console.log('Перехід на сторінку ножа:', this.knife.id);
  }

  addToCart(event: Event) {
    event.stopPropagation(); // Блокує клік по самій картці
    console.log('Додано в кошик:', this.knife.name);
  }
}