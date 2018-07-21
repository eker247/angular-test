import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmgalleryComponent } from './amgallery.component';

describe('AmgalleryComponent', () => {
  let component: AmgalleryComponent;
  let fixture: ComponentFixture<AmgalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmgalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmgalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
