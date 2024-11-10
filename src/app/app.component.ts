import { Component } from '@angular/core';
import { ContainerComponent } from './container/container.component';
import { SectionPreviewComponent } from './section-preview/section-preview.component';
import { SectionOperatingPrincipleComponent } from './section-operating-principle/section-operating-principle.component';
import { SectionCongratulationComponent } from './section-congratulation/section-congratulation.component';
import { SectionReviewsComponent } from './section-reviews/section-reviews.component';
import { SectionQuestionsComponent } from './section-questions/section-questions.component';
import { SectionDescriptionComponent } from './section-description/section-description.component';
import { SectionContactFormComponent } from './section-contact-form/section-contact-form.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ContainerComponent, SectionPreviewComponent, SectionOperatingPrincipleComponent, SectionCongratulationComponent,
    SectionReviewsComponent, SectionQuestionsComponent, SectionDescriptionComponent, SectionContactFormComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'internetlab';
}
