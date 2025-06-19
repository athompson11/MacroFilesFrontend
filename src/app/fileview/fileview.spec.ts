import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fileview } from './fileview';

describe('Fileview', () => {
  let component: Fileview;
  let fixture: ComponentFixture<Fileview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fileview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fileview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
