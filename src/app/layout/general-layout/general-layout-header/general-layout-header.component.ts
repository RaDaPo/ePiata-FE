import { Component, OnInit, Input } from '@angular/core';
import { CategoryItem } from 'src/app/models/category-item';
import { CategoriesService } from 'src/app/shared/services/categories.service';
import { CountiesService } from 'src/app/shared/services/counties.service';

@Component({
    selector: 'app-general-layout-header',
    templateUrl: './general-layout-header.component.html',
    styleUrls: ['./general-layout-header.component.scss']
})
export class GeneralLayoutHeaderComponent implements OnInit {

    @Input() category: any;
    @Input() county: any;
    @Input() searchTerm: string;
    @Input() showFilter = true;
    categoryModel: CategoryItem;

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
        private categoriesService: CategoriesService,
        private countiesService: CountiesService
    ) { }

    ngOnInit() {
        this.resetCategoryAndCounty();
        this.getCounties();
        this.getCategories();
        this.getCategoryById();
    }

    getCounties() {
        this.countiesService.getCounties()
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
        this.categoriesService.getCategories()
            .subscribe(
                (categories) => {
                    this.categories = categories;
                }
            );
    }

    getCategoryById() {
        const categoryId = this.category === 'Categorie' ? null : this.category;
        if (categoryId) {
            this.categoriesService.getById(categoryId)
                .subscribe(
                    (category) => {
                        this.categoryModel = category;
                    }
                );
        }
    }

    resetCategoryAndCounty() {
        this.category = this.category === 'any' ? 'Categorie' : this.category;
        this.county = this.county === 'any' ? 'Judet' : this.county;
        this.searchTerm = this.searchTerm === 'any' ||  this.searchTerm === 'undefined' ? '' : this.searchTerm;
    }

    onChangeFilter(value) {

    }

}
