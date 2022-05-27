import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TankstelleComponent } from './tankstelle.component';

describe('TankstelleComponent', () => {
  let component: TankstelleComponent;
  let fixture: ComponentFixture<TankstelleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TankstelleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TankstelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
