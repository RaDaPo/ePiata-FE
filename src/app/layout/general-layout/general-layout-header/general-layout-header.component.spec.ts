import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralLayoutHeaderComponent } from './general-layout-header.component';

describe('GeneralLayoutHeaderComponent', () => {
  let component: GeneralLayoutHeaderComponent;
  let fixture: ComponentFixture<GeneralLayoutHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralLayoutHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralLayoutHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
