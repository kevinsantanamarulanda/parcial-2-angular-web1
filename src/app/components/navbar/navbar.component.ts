import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavItem } from '../../interfaces/nav-item.interface';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  navItems: NavItem[] = [
    { url: '/cv', label: 'Hoja de vida', icon: 'person-badge' },
    { url: '/learning', label: 'Aprendizaje', icon: 'mortarboard' },
    { url: '/free-topic', label: 'Tema libre', icon: 'controller' },
  ];
}