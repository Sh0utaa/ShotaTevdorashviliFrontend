import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';


import { NavbarComponent } from './Navbar/navbar.component';
import { HomeComponent } from './Home/home.component';
import { AboutComponent } from './About/about.component';
import { HarvardComponent } from './Harvard/harvard.component';
import { ProjectsComponent } from './Projects/projects.component';
import { ContactsComponent } from './Contact/contacts.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, HomeComponent, AboutComponent, HarvardComponent, ProjectsComponent, ContactsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  ngOnInit() {
    AOS.init();
  }
}

