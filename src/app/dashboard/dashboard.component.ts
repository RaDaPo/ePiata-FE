import { Component, OnInit } from '@angular/core';
import { DashboardService } from './services/dashboard.service';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    categories = [
        { 'key': 'Rosii', 'value': 'Rosii' },
        { 'key': 'Cartofi', 'value': 'Cartofi' },
        { 'key': 'Porumb', 'value': 'Porumb' },
        { 'key': 'Grau', 'value': 'Grau' }
    ];
    counties: any;

    displayKey = 'key';
    styleGuide = {
        caretClass: 'caret',
        selectBoxClass: 'dropdown-wrapper',
        selectMenuClass: 'dropdown',
        optionsClass: 'option'
    };
    searchKeys = ['key', 'value'];

    category: any;
    county: any;
    searchTerm = '';

    constructor(
        private dashboardService: DashboardService,
        private router: Router
    ) { }

    ngOnInit() {
        this.getCounties();
    }

    getCounties() {
        this.dashboardService.getCounties()
            .subscribe(
                (counties) => {
                    this.counties = [
                        { 'key': 'Judet', 'value': '' }
                    ];
                    this.counties = this.counties.concat(counties);
                }
            );
    }

    onChangeCategory(value) {
        this.category = value;
    }

    onChangeCounty(value) {
        this.county = value;
    }

    searchAnnouncements() {
        let category = 'any';
        let county = 'any';
        if (this.category && this.category.value) {
            category = this.category.value;
        }

        if (this.county && this.county.value) {
            county = this.county.value;
        }

        const url = '/announcement/' + category + '/' + county + '/' + this.searchTerm;
        this.router.navigateByUrl(url);
    }

}
