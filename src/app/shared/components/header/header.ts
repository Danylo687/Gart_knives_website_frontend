import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class HeaderComponent {
  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Хедер змінюватиме колір після того, як користувач проскролить 50 пікселів вниз
    this.isScrolled = window.scrollY > 50;
  }
}