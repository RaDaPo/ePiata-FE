import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnouncementOverviewComponent } from './announcement-overview.component';

describe('AnnouncementOverviewComponent', () => {
  let component: AnnouncementOverviewComponent;
  let fixture: ComponentFixture<AnnouncementOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnouncementOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnouncementOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
