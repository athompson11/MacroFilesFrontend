import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Menubutton } from './menubutton';

describe('Menubutton', () => {
  let component: Menubutton;
  let fixture: ComponentFixture<Menubutton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Menubutton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Menubutton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
