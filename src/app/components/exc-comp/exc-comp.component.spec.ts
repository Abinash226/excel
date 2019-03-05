import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcCompComponent } from './exc-comp.component';

describe('ExcCompComponent', () => {
  let component: ExcCompComponent;
  let fixture: ComponentFixture<ExcCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
