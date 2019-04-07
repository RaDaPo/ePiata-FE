import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpHeaders, HttpErrorResponse, HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { ResponseAnnouncements } from 'src/app/announcement/models/response-announcement';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
})
export class OffersService {

    private httpApi = {
        url: 'http://192.168.86.55:8080/api/offers'
    };

    public endpoints = {
        createOffer: () => this.httpApi.url
    };

    constructor(
        private http: HttpClient
    ) { }

    createOffer(request: ResponseAnnouncements): Observable<any> {
        request.category = Number(request.category);
        return this.http.post(this.endpoints.createOffer(), request, httpOptions)
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
