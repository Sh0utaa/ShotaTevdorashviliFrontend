import { Component, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  constructor(private renderer: Renderer2) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const hamburgerMenu = document.querySelector(".hamburger_menu");


    if (scrollPosition >= 750) {
      this.renderer.setStyle(hamburgerMenu, 'background-color', 'black');
    } else {
      this.renderer.setStyle(hamburgerMenu, 'background-color', '');
    }
  }


  isSidebarVisible = false;
  isMenuVisable = true;

  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
    this.isMenuVisable = !this.isMenuVisable;
  }
  scrollToHome() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  scrollToAbout() {
    window.scrollTo({ top: 700, behavior: 'smooth' });
  }
  scrollToHarvard() {
    window.scrollTo({ top: 1400, behavior: 'smooth' });
  }
  scrollToProjects() {
    window.scrollTo({ top: 2150, behavior: 'smooth' });
  }
  scrollToContact() {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  }
}


export function scrollToHome() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
export function scrollToAbout() {
  window.scrollTo({ top: 700, behavior: 'smooth' });
}
export function scrollToHarvard() {
  window.scrollTo({ top: 1400, behavior: 'smooth' });
}
export function scrollToProjects() {
  window.scrollTo({ top: 2150, behavior: 'smooth' });
}
export function scrollToContact() {
  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
}
