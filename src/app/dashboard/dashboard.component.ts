import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryItem } from '../models/category-item';
import { CountiesService } from '../shared/services/counties.service';
import { CategoriesService } from '../shared/services/categories.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    categories: Array<CategoryItem>;
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
        private countiesService: CountiesService,
        private categoriesService: CategoriesService,
        private router: Router
    ) { }

    ngOnInit() {
        this.getCounties();
        this.getCategories();
        this.getUserLocation();
    }

    getCounties() {
        this.countiesService.getCounties()
            .subscribe(
                (counties) => {
                    this.counties = [
                        { 'key': 'Judet', 'value': '' }
                    ];
                    this.counties = this.counties.concat(counties);
                }
            );
    }

    getCategories() {
        this.categoriesService.getCategories()
            .subscribe(
                (categories) => {
                    this.categories = categories;
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

        const url = '/announcements/' + category + '/' + county + '/' + this.searchTerm;
        this.router.navigateByUrl(url);
    }

    getUserLocation() {
        if (window.navigator && window.navigator.geolocation) {
            window.navigator.geolocation.getCurrentPosition(
                (position) => {
                    localStorage.setItem('latitude', position.coords.latitude.toString());
                    localStorage.setItem('longitute', position.coords.longitude.toString());
                },
                error => {
                    switch (error.code) {
                        case 1:
                            console.log('Permission Denied');
                            break;
                        case 2:
                            console.log('Position Unavailable');
                            break;
                        case 3:
                            console.log('Timeout');
                            break;
                    }
                }
            );
        }
    }

}
