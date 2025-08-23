import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoredetailsComponent } from './moredetails.component';

describe('MoredetailsComponent', () => {
  let component: MoredetailsComponent;
  let fixture: ComponentFixture<MoredetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoredetailsComponent]
    });
    fixture = TestBed.createComponent(MoredetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
