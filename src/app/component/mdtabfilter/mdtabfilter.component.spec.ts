import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdtabfilterComponent } from './mdtabfilter.component';

describe('MdtabfilterComponent', () => {
  let component: MdtabfilterComponent;
  let fixture: ComponentFixture<MdtabfilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdtabfilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdtabfilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
