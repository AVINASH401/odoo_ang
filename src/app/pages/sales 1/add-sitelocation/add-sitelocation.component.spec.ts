import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSitelocationComponent } from './add-sitelocation.component';

describe('AddSitelocationComponent', () => {
  let component: AddSitelocationComponent;
  let fixture: ComponentFixture<AddSitelocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSitelocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSitelocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
