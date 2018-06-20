import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterclassComponent } from './registerclass.component';

describe('RegisterclassComponent', () => {
  let component: RegisterclassComponent;
  let fixture: ComponentFixture<RegisterclassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterclassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
