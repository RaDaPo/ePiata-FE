import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AnnouncementOverviewService } from '../services/announcement-overview.service';
import { RequestAnnouncements } from '../models/request-announcements';
import { AnnouncementItem } from '../models/announcement-item';

@Component({
    selector: 'app-announcement-overview',
    templateUrl: './announcement-overview.component.html',
    styleUrls: ['./announcement-overview.component.scss']
})
export class AnnouncementOverviewComponent implements OnInit {

    category: any;
    county: any;
    searchTerm: any;
    announcement: Array<AnnouncementItem>;

    constructor(
        private route: ActivatedRoute,
        private announcementOverviewService: AnnouncementOverviewService
    ) { }

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
        requestAnnouncements.category = this.category;
        requestAnnouncements.county = this.county;
        requestAnnouncements.searchTerm = this.searchTerm;

        this.announcementOverviewService.getAnnouncements(requestAnnouncements)
            .subscribe(
                (response) => {
                    this.announcement = response;
                }
            );
    }

}
