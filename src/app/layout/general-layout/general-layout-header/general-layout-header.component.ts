import { Component, OnInit, Input } from '@angular/core';
import { DashboardService } from 'src/app/dashboard/services/dashboard.service';
import { CategoryItem } from 'src/app/models/category-item';

@Component({
    selector: 'app-general-layout-header',
    templateUrl: './general-layout-header.component.html',
    styleUrls: ['./general-layout-header.component.scss']
})
export class GeneralLayoutHeaderComponent implements OnInit {

    @Input() category: any;
    @Input() county: any;
    @Input() searchTerm: string;

    categories: Array<CategoryItem>;
    filters = [
        { 'key': 'Pret asc', 'value': 'priceAsc' },
        { 'key': 'Pret desc', 'value': 'priceDesc' },
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

    constructor(
        private dashboardService: DashboardService
    ) { }

    ngOnInit() {
        this.resetCategoryAndCounty();
        this.getCounties();
        this.getCategories();
    }

    getCounties() {
        this.dashboardService.getCounties()
            .subscribe(
                (counties) => {
                    this.counties = [
                        { 'key': 'Judet', 'value': 'Judet' }
                    ];
                    this.counties = this.counties.concat(counties);
                }
            );
    }

    getCategories() {
        this.dashboardService.getCategories()
            .subscribe(
                (categories) => {
                    this.categories = categories;
                }
            );
    }

    resetCategoryAndCounty() {
        this.category = this.category === 'any' ? 'Categorie' : this.category;
        this.county = this.county === 'any' ? 'Judet' : this.county;
    }

    onChangeFilter(value) {

    }

}
