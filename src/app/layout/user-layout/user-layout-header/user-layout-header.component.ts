import { Component, OnInit, ElementRef } from '@angular/core';

import $ from 'jquery';

@Component({
    selector: 'app-user-layout-header',
    templateUrl: './user-layout-header.component.html',
    styleUrls: ['./user-layout-header.component.scss']
})
export class UserLayoutHeaderComponent implements OnInit {

    private nativeElement;

    constructor(
        private el: ElementRef
    ) { }

    ngOnInit() {
        this.nativeElement = this.el.nativeElement;
    }

    openAddOfferModal(modalIdentificator: string) {
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

}
