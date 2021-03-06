import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { CategoryItem } from 'src/app/models/category-item';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
})
export class CategoriesService {

    private httpApi = {
        url: 'http://192.168.86.55:8080/api/'
    };

    public endpoints = {
        getCategories: () => this.httpApi.url + 'categories',
        getCategory: () => this.httpApi.url + 'categories/id/'
    };

    constructor(
        private http: HttpClient
    ) { }

    getCategories(): Observable<any> {
        return this.http.get(this.endpoints.getCategories(), httpOptions)
            .pipe(
                map((response: any) => {
                    return this.mapCategories(response);
                }),
                catchError((error: HttpErrorResponse) => {
                    return throwError(error);
                })
            );
    }

    getById(categoryId): Observable<any> {
        return this.http.get(this.endpoints.getCategory() + categoryId, httpOptions)
            .pipe(
                map((response: any) => {
                    return this.mapCategory(response);
                }),
                catchError((error: HttpErrorResponse) => {
                    return throwError(error);
                })
            );
    }

    mapCategories(response) {
        const categories = [];
        categories.push(
            new CategoryItem(
                'Categorie',
                'Categorie'
            )
        );
        response.map(
            (category) => {
                categories.push(
                    this.mapCategory(category)
                );
            }
        );

        return categories;
    }

    mapCategory(category) {
        return new CategoryItem(
            category.name,
            category.id,
            category.type
        );
    }

}
