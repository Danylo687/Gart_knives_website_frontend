import { Component, ElementRef, ViewChild } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header';
import { ProductCardComponent } from '../../shared/components/product-card/product-card';
import { Knife } from '../../shared/models/knife.interface';
import { FooterComponent } from '../../shared/components/footer/footer';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, ProductCardComponent, FooterComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent {
  @ViewChild('carouselRef') carousel!: ElementRef<HTMLElement>;

  mockKnives: Knife[] = [
    { id: '1', name: 'Шеф-ніж (сталь ДИ-90МП)', price: 4500, imageUrl: '/mock1.jpg' },
    { id: '2', name: 'Універсал Sleipner (руків\'я G10)', price: 3800, imageUrl: '/mock2.jpg' },
    { id: '3', name: 'Філейний ніж AEB-L', price: 3200, imageUrl: '/mock3.jpg' },
    { id: '4', name: 'Туристичний з кайдексом', price: 4100, imageUrl: '/mock4.jpg' },
    { id: '5', name: 'Малий універсал (стабілізована деревина)', price: 2900, imageUrl: '/mock5.jpg' },
    { id: '6', name: 'Шкуродер (сталь ДИ-90МП)', price: 4600, imageUrl: '/mock6.jpg' },
    { id: '7', name: 'Кухонний сантоку (AEB-L)', price: 3700, imageUrl: '/mock7.jpg' },
    { id: '8', name: 'Тактичний ніж (Sleipner)', price: 5200, imageUrl: '/mock8.jpg' },
    { id: '9', name: 'Обвалочний ніж (G10)', price: 3100, imageUrl: '/mock9.jpg' },
    { id: '10', name: 'Міський EDC (кайдекс)', price: 2800, imageUrl: '/mock10.jpg' },
    { id: '11', name: 'Мисливський (стабілізований дуб)', price: 4300, imageUrl: '/mock11.jpg' },
    { id: '12', name: 'Шеф-ніж великий (ДИ-90МП)', price: 5500, imageUrl: '/mock12.jpg' }
  ];

  scroll(direction: 'left' | 'right') {
    const el = this.carousel.nativeElement;
    const scrollAmount = el.offsetWidth; 
    const maxScroll = el.scrollWidth - el.clientWidth;

    if (direction === 'left') {
      if (el.scrollLeft <= 0) {
        el.scrollTo({ left: maxScroll, behavior: 'smooth' }); // Стрибок в кінець
      } else {
        el.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      }
    } else {
      if (el.scrollLeft >= maxScroll - 10) { // -10px для компенсації похибок браузера
        el.scrollTo({ left: 0, behavior: 'smooth' }); // Стрибок на початок
      } else {
        el.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  }


  knifeCategories = [
    { name: 'EDC', imageUrl: '/engn_1.jpg', link: '/category/edc' },
    { name: 'КУХОННІ', imageUrl: '/kngn_1.jpg', link: '/category/kitchen' },
    { name: 'ТУРИСТИЧНІ', imageUrl: '/ongn_1.jpg', link: '/category/tourist' },
    { name: 'ТАКТИЧНІ', imageUrl: '/tngn_1.jpg', link: '/category/tactical' }
  ];

}