import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ContainerComponent } from '../container/container.component';

@Component({
  selector: 'app-section-contact-form',
  standalone: true,
  imports: [ReactiveFormsModule, ContainerComponent, CommonModule],
  templateUrl: './section-contact-form.component.html',
  styleUrl: './section-contact-form.component.css'
})
export class SectionContactFormComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      phone: ['', [Validators.required, Validators.pattern(/^\+?[0-9]{11}$/)]],
      agreement: [false, Validators.requiredTrue]
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      console.log('Form Submitted!', this.contactForm.value);
      this.contactForm.reset();
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}
