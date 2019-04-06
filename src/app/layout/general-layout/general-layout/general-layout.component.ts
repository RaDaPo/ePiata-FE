import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'app-general-layout',
    templateUrl: './general-layout.component.html',
    styleUrls: ['./general-layout.component.scss']
})
export class GeneralLayoutComponent implements OnInit {

    category: any;
    county: any;
    searchTerm: any;
    routeParams = false;

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

            this.routeParams = true;
        });
    }

}
