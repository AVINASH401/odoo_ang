import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSitelocationComponent } from './edit-sitelocation.component';

describe('EditSitelocationComponent', () => {
  let component: EditSitelocationComponent;
  let fixture: ComponentFixture<EditSitelocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSitelocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSitelocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
