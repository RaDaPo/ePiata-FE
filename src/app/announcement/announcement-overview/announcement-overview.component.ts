import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'app-announcement-overview',
    templateUrl: './announcement-overview.component.html',
    styleUrls: ['./announcement-overview.component.scss']
})
export class AnnouncementOverviewComponent implements OnInit {

    category: any;
    county: any;
    searchTerm: any;

    constructor(
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.subscribeToRouteParams();
    }

    subscribeToRouteParams() {
        const paramsSubscription = this.route.params.subscribe((params: Params) => {
            this.category = params['category'];
            this.county = params['county'];
            this.searchTerm = params['searchTerm'];

            console.log(params);
        });
    }

}
