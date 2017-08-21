import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastChanceComponent } from './last-chance.component';

describe('LastChanceComponent', () => {
  let component: LastChanceComponent;
  let fixture: ComponentFixture<LastChanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastChanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastChanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
