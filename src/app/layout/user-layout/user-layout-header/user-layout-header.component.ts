import { Component, OnInit, ElementRef } from '@angular/core';

import $ from 'jquery';
import { MAT_SELECT_SCROLL_STRATEGY } from '@angular/material';
import { FileSystemDirectoryEntry, FileSystemFileEntry, UploadFile, UploadEvent } from 'ngx-file-drop';
import { ResponseAnnouncements } from 'src/app/announcement/models/response-announcement';
import { LocationItem } from 'src/app/models/location-item';
import { Units } from 'src/app/models/units';
import { CategoriesService } from 'src/app/shared/services/categories.service';
import { CategoryItem } from 'src/app/models/category-item';
import { OffersService } from 'src/app/shared/services/offers.service';

@Component({
    selector: 'app-user-layout-header',
    templateUrl: './user-layout-header.component.html',
    styleUrls: ['./user-layout-header.component.scss'],
    providers: [
        { provide: MAT_SELECT_SCROLL_STRATEGY, useValue: {} }
    ]
})
export class UserLayoutHeaderComponent implements OnInit {

    minDate = new Date();
    inputStartDate: any;
    inputEndDate: any;
    units = Units;
    images: UploadFile[];
    offer: ResponseAnnouncements = new ResponseAnnouncements();
    categories: Array<CategoryItem> = [];
    currentModal: any;
    private nativeElement;

    constructor(
        private el: ElementRef,
        private categoriesService: CategoriesService,
        private offersService: OffersService
    ) {
        this.offer.location = new LocationItem();
    }

    ngOnInit() {
        this.nativeElement = this.el.nativeElement;
        this.getCategories();
    }

    getCategories() {
        this.categoriesService.getCategories()
            .subscribe(
                (response) => {
                    this.categories = response;
                }
            );
    }

    openAddOfferModal(modalIdentificator: string) {
        this.currentModal = modalIdentificator;
        this.open(modalIdentificator);
    }

    open(modalIdentificator: string) {
        $(this.nativeElement).find('#modals-container').addClass('modal-open');
        $(this.nativeElement).find(modalIdentificator).addClass('show');
        $(this.nativeElement).find(modalIdentificator).css('display', 'block');
    }

    close(modalIdentificator: string) {
        $(this.nativeElement).find('#modals-container').removeClass('modal-open');
        $(this.nativeElement).find(modalIdentificator).removeClass('show');
        $(this.nativeElement).find(modalIdentificator).css('display', 'none');
    }

    dropped(event: UploadEvent) {
        this.images = event.files;
        for (const droppedFile of event.files) {

            if (droppedFile.fileEntry.isFile) {
                const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
                fileEntry.file((file: File) => {

                    console.log(droppedFile.relativePath, file);
                    this.getBase64(file);
                });
            } else {
                const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
                console.log(droppedFile.relativePath, fileEntry);
            }
        }
    }

    fileOver(event) {
        console.log(event);
    }

    fileLeave(event) {
        console.log(event);
    }

    handleFileSelect(evt) {
        const files = evt.target.files;
        const file = files[0];

        if (files && file) {
            const reader = new FileReader();

            reader.onload = this._handleReaderLoaded.bind(this);

            reader.readAsBinaryString(file);
        }
    }

    _handleReaderLoaded(readerEvt) {
        const binaryString = readerEvt.target.result;
        this.offer.image = btoa(binaryString);
    }

    getBase64(file) {
        const reader = new FileReader();
        let base64;
        reader.readAsDataURL(file);
        reader.onload = function () {
          base64 = reader.result;
        };
        reader.onerror = function (error) {
          console.log('Error: ', error);
        };

        setTimeout(
            () => {
                this.offer.image = base64;
            }, 500
        );
    }

    addOffer() {
        this.offersService.createOffer(this.offer)
            .subscribe(
                (response) => {
                    this.close(this.currentModal);
                }
            );
    }

}
