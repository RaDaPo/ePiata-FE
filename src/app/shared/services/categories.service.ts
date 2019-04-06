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
        url: 'http://192.168.86.55:8090/api/'
    };

    public endpoints = {
        getCategories: () => this.httpApi.url + 'categories'
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
                    new CategoryItem(
                        category.name,
                        category.name,
                        category.type
                    )
                );
            }
        );

        return categories;
    }

}
