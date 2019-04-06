import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
})
export class DashboardService {


    private httpApi = {
        url: 'http://localhost:4200/'
    };

    public endpoints = {
        getCounties: () => this.httpApi.url + 'assets/datas/counties.json',
    };

    constructor(
        private http: HttpClient
    ) { }

    getCounties(): Observable<any> {
        return this.http.get(this.endpoints.getCounties(), httpOptions)
        .pipe(
            map((response: any) => {
                return response;
            }),
            catchError((error: HttpErrorResponse) => {
                return throwError(error);
            })
        );
    }

}
