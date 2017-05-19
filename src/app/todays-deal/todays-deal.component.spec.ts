import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodaysDealComponent } from './todays-deal.component';

describe('TodaysDealComponent', () => {
  let component: TodaysDealComponent;
  let fixture: ComponentFixture<TodaysDealComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodaysDealComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodaysDealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
