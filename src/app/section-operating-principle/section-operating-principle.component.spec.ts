import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionOperatingPrincipleComponent } from './section-operating-principle.component';

describe('SectionOperatingPrincipleComponent', () => {
  let component: SectionOperatingPrincipleComponent;
  let fixture: ComponentFixture<SectionOperatingPrincipleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionOperatingPrincipleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionOperatingPrincipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
