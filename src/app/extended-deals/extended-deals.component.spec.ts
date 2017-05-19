import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendedDealsComponent } from './extended-deals.component';

describe('ExtendedDealsComponent', () => {
  let component: ExtendedDealsComponent;
  let fixture: ComponentFixture<ExtendedDealsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtendedDealsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtendedDealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
