import { TestBed } from '@angular/core/testing';

import { AnnouncementOverviewService } from './announcement-overview.service';

describe('AnnouncementOverviewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnnouncementOverviewService = TestBed.get(AnnouncementOverviewService);
    expect(service).toBeTruthy();
  });
});
