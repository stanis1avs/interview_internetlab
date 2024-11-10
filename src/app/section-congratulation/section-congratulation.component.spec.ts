import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionCongratulationComponent } from './section-congratulation.component';

describe('SectionCongratulationComponent', () => {
  let component: SectionCongratulationComponent;
  let fixture: ComponentFixture<SectionCongratulationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionCongratulationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionCongratulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
