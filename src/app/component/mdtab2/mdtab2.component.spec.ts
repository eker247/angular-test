import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mdtab2Component } from './mdtab2.component';

describe('Mdtab2Component', () => {
  let component: Mdtab2Component;
  let fixture: ComponentFixture<Mdtab2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mdtab2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mdtab2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
