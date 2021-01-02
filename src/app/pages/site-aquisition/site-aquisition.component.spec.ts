import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteAquisitionComponent } from './site-aquisition.component';

describe('SiteAquisitionComponent', () => {
  let component: SiteAquisitionComponent;
  let fixture: ComponentFixture<SiteAquisitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteAquisitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteAquisitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
