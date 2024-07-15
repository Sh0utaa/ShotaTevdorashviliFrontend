import { Component, HostListener, OnInit } from '@angular/core';
import { scrollToHome, scrollToAbout, scrollToHarvard, scrollToProjects, scrollToContact } from '../Navbar/navbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css',],
})
export class HomeComponent {
  scrollToHome = scrollToHome;
  scrollToAbout = scrollToAbout;
  scrollToHarvard = scrollToHarvard;
  scrollToProjects = scrollToProjects;
  scrollToContact = scrollToContact;
}

