import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AnnouncementService } from '../services/announcement.service';
import { RequestAnnouncements } from '../models/request-announcements';
import { ResponseAnnouncements } from '../models/response-announcement';
import { LocationItem } from 'src/app/models/location-item';

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
        private announcementService: AnnouncementService
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
        requestAnnouncements.location = new LocationItem();
        requestAnnouncements.location.county = this.county !== 'any' ? this.county : null;
        requestAnnouncements.searchTerm = this.searchTerm !== 'any' ? this.searchTerm : '';

        this.announcementService.getAllAnnouncements(requestAnnouncements)
            .subscribe(
                (response) => {
                    this.announcements = response;
                }
            );
    }
}
