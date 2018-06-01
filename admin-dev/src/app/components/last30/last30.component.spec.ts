import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Last30Component } from './last30.component';

describe('Last30Component', () => {
  let component: Last30Component;
  let fixture: ComponentFixture<Last30Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Last30Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Last30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
