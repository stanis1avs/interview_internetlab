import { Component } from '@angular/core';
import { ContainerComponent } from '../container/container.component';

@Component({
  selector: 'app-section-preview',
  standalone: true,
  imports: [ContainerComponent],
  templateUrl: './section-preview.component.html',
  styleUrl: './section-preview.component.css'
})
export class SectionPreviewComponent {
  openMenu() {
    const nav = document.querySelector('.nav');
    nav?.classList.add('active');

    const header = document.querySelector('.preview-block-header');
    header?.classList.add('active');

    const closeMenu = document.querySelector('.close-menu');
    closeMenu?.classList.add('active');

    const logo = document.querySelector('.logo');
    logo?.classList.add('active');
  }

  closeMenu() {
    const nav = document.querySelector('.nav');
    nav?.classList.remove('active');

    const header = document.querySelector('.preview-block-header');
    header?.classList.remove('active');

    const closeMenu = document.querySelector('.close-menu');
    closeMenu?.classList.remove('active');

    const logo = document.querySelector('.logo');
    logo?.classList.remove('active');
  }
}
