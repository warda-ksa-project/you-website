import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdownaComponent } from './mdowna.component';

describe('MdownaComponent', () => {
  let component: MdownaComponent;
  let fixture: ComponentFixture<MdownaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MdownaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MdownaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
