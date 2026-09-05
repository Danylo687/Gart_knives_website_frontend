import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class HeaderComponent {
  isScrolled = false;
  isMobileMenuOpen = false;
  isKnivesExpanded = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  /* Повернення на самий верх сторінки */
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /* Керування мобільним меню */
  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    // Блокуємо скрол сторінки, коли меню відкрите
    if (this.isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  /* Керування списком "Ножі" в мобільному меню */
  toggleKnives(event: Event) {
    event.preventDefault();
    this.isKnivesExpanded = !this.isKnivesExpanded;
  }
}