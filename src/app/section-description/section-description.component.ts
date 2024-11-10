import { Component } from '@angular/core';
import { ContainerComponent } from '../container/container.component';

@Component({
  selector: 'app-section-description',
  standalone: true,
  imports: [ContainerComponent],
  templateUrl: './section-description.component.html',
  styleUrl: './section-description.component.css'
})
export class SectionDescriptionComponent {

}
