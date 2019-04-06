import { Injectable } from '@angular/core';
import { RequestAnnouncements } from '../models/request-announcements';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
})
export class AnnouncementOverviewService {

    private httpApi = {
        url: 'http://localhost:4200/'
    };

    public endpoints = {
        getAnnouncements: () => this.httpApi.url + 'announcements',
    };


    constructor(
        private http: HttpClient
    ) { }

    getAnnouncements(requestGetAnnouncements: RequestAnnouncements): Observable<any> {
        return this.http.post(this.endpoints.getAnnouncements(), requestGetAnnouncements, httpOptions)
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
