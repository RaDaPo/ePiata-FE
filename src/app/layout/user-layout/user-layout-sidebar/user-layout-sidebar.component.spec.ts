import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLayoutSidebarComponent } from './user-layout-sidebar.component';

describe('UserLayoutSidebarComponent', () => {
  let component: UserLayoutSidebarComponent;
  let fixture: ComponentFixture<UserLayoutSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserLayoutSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLayoutSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
