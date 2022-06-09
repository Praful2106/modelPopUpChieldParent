import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpParentComponent } from './pop-up-parent.component';

describe('PopUpParentComponent', () => {
  let component: PopUpParentComponent;
  let fixture: ComponentFixture<PopUpParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopUpParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
