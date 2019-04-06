import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLayoutHeaderComponent } from './user-layout-header.component';

describe('UserLayoutHeaderComponent', () => {
  let component: UserLayoutHeaderComponent;
  let fixture: ComponentFixture<UserLayoutHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserLayoutHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLayoutHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
