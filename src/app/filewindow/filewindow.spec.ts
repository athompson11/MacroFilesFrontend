import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Filewindow } from './filewindow';

describe('Filewindow', () => {
  let component: Filewindow;
  let fixture: ComponentFixture<Filewindow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Filewindow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Filewindow);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
