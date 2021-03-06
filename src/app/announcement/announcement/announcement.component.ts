import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AnnouncementService } from '../services/announcement.service';
import { ResponseAnnouncements } from '../models/response-announcement';

@Component({
    selector: 'app-announcement',
    templateUrl: './announcement.component.html',
    styleUrls: ['./announcement.component.scss']
})
export class AnnouncementComponent implements OnInit {

    category: any;
    county: any;
    searchTerm: any;
    announcementId: number;
    announcement: ResponseAnnouncements;

    constructor(private route: ActivatedRoute,
        private announcementService: AnnouncementService) {
    }

    ngOnInit() {
        this.subscribeToRouteParams();
    }

    subscribeToRouteParams() {
        const paramsSubscription = this.route.params.subscribe((params: Params) => {
            this.category = params['category'];
            this.county = params['county'];
            this.searchTerm = params['searchTerm'];
            this.announcementId = params['id'];
            console.log(this.announcementId);

            this.getAnnouncement();
        });
    }

    getAnnouncement() {
        this.announcementService.getAnnouncement(this.announcementId)
            .subscribe(
                (response) => {
                    this.announcement = response;
                }
            );
    }

}
