import { Injectable } from '@angular/core';
import { RequestAnnouncements } from '../models/request-announcements';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { ResponseAnnouncements } from '../models/response-announcement';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
})
export class AnnouncementService {

    private httpApi = {
        url: 'http://192.168.86.55:8080/api/offers'
    };

    public endpoints = {
        getAllAnnouncements: () => this.httpApi.url + '/all',
        getAnnouncements: () => this.httpApi.url,
        getAnnouncement: () => this.httpApi.url,
        deleteAnnouncement: () => this.httpApi.url,
        updateAnnouncement: () => this.httpApi.url,
        createAnnouncement: () => this.httpApi.url,
    };

    constructor(
        private http: HttpClient
    ) {
    }

    getAllAnnouncements(request: RequestAnnouncements): Observable<Array<ResponseAnnouncements>> {
        request.latitude = localStorage.getItem('latitude');
        request.longitude = localStorage.getItem('longitude');
        request.category = request.category;

        if (!request.category && !request.searchTerm && !request.location.county) {
            return this.http.get(this.endpoints.getAnnouncements(), httpOptions)
                .pipe(
                    map((response: Array<ResponseAnnouncements>) => {
                        return response;
                    }),
                    catchError((error: HttpErrorResponse) => {
                        return throwError(error);
                    })
                );
        }

        return this.http.post(this.endpoints.getAllAnnouncements(), request, httpOptions)
            .pipe(
                map((response: Array<ResponseAnnouncements>) => {
                    return response;
                }),
                catchError((error: HttpErrorResponse) => {
                    return throwError(error);
                })
            );
    }

    getAnnouncement(announcementId: number): Observable<ResponseAnnouncements> {
        return this.http.get(this.endpoints.getAnnouncement() + announcementId, httpOptions)
            .pipe(
                map((response: any) => {
                    return response;
                }),
                catchError((error: HttpErrorResponse) => {
                    return throwError(error);
                })
            );
    }

    // createAnnouncement(requestGetAnnouncements: RequestAnnouncements): Observable<any> {
    //   return this.http.post(this.endpoints.getAnnouncement(), requestGetAnnouncements, httpOptions)
    //     .pipe(
    //       map((response: any) => {
    //         return response;
    //       }),
    //       catchError((error: HttpErrorResponse) => {
    //         return throwError(error);
    //       })
    //     );
    // }
    //
    // updateAnnouncement(requestGetAnnouncements: RequestAnnouncements): Observable<any> {
    //   return this.http.put(this.endpoints.getAnnouncement(), requestGetAnnouncements, httpOptions)
    //     .pipe(
    //       map((response: any) => {
    //         return response;
    //       }),
    //       catchError((error: HttpErrorResponse) => {
    //         return throwError(error);
    //       })
    //     );
    // }
    //
    // deleteAnnouncement(requestGetAnnouncements: RequestAnnouncements): Observable<any> {
    //   return this.http.delete(this.endpoints.getAnnouncement(), httpOptions)
    //     .pipe(
    //       map((response: any) => {
    //         return response;
    //       }),
    //       catchError((error: HttpErrorResponse) => {
    //         return throwError(error);
    //       })
    //     );
    // }

}
