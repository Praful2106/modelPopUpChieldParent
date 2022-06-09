import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpChildComponent } from './pop-up-child.component';

describe('PopUpChildComponent', () => {
  let component: PopUpChildComponent;
  let fixture: ComponentFixture<PopUpChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopUpChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
