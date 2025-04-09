import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactHintComponent } from './contact-hint.component';

describe('ContactHintComponent', () => {
  let component: ContactHintComponent;
  let fixture: ComponentFixture<ContactHintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactHintComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactHintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
