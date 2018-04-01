import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDrpComponent } from './ngx-drp.component';

describe('NgxDrpComponent', () => {
  let component: NgxDrpComponent;
  let fixture: ComponentFixture<NgxDrpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxDrpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDrpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
