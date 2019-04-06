import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {AnnouncementOverviewService} from '../services/announcement-overview.service';
import {RequestAnnouncements} from '../models/request-announcements';
import {ResponseAnnouncements} from '../models/response-announcement';

@Component({
  selector: 'app-announcement-overview',
  templateUrl: './announcement-overview.component.html',
  styleUrls: ['./announcement-overview.component.scss']
})
export class AnnouncementOverviewComponent implements OnInit {

  category: any;
  county: any;
  searchTerm: any;
  announcements: Array<ResponseAnnouncements>;


  constructor(
    private route: ActivatedRoute,
    private announcementOverviewService: AnnouncementOverviewService
  ) {
  }

  ngOnInit() {
    this.subscribeToRouteParams();
  }

  subscribeToRouteParams() {
    const paramsSubscription = this.route.params.subscribe((params: Params) => {
      this.category = params['category'];
      this.county = params['county'];
      this.searchTerm = params['searchTerm'];

      this.getAnnouncements();
    });
  }

  getAnnouncements() {
    const requestAnnouncements = new RequestAnnouncements();
    requestAnnouncements.category = this.category !== 'any' ? this.category : null;
    requestAnnouncements.county = this.county !== 'any' ? this.county : null;
    requestAnnouncements.searchTerm = this.searchTerm !== 'any' ? this.searchTerm : '';

    this.announcementOverviewService.getAllAnnouncements(requestAnnouncements)
      .subscribe(
        (response) => {
          this.announcements = response;
        }
      );
  }
}
