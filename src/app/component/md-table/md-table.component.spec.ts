
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdTableComponent } from './md-table.component';

describe('MdTableComponent', () => {
  let component: MdTableComponent;
  let fixture: ComponentFixture<MdTableComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MdTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MdTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
